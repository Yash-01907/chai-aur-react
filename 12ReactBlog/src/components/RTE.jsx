import React from "react";
import { Controller } from "react-hook-form";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import { $getRoot, $getSelection } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import './styles.css'

function EditorContent({ onChange }) {
  const [editor] = useLexicalComposerContext();

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          const htmlString = editor.getRootElement().innerHTML;
          onChange(htmlString);
        });
      }}
    />
  );
}

export default function RTE({ name, control, label, defaultValue = "" }) {
  const editorConfig = {
    namespace: "MyEditor",
    theme: {
      paragraph: "editor-paragraph",
    },
    onError(error) {
      throw error;
    },
    editorState: () => {
      // Optional: set initial state if needed
    },
    nodes: [],
  };

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                placeholder={
                  <div className="editor-placeholder">Start writing...</div>
                }
              />
              <HistoryPlugin />
              <EditorContent onChange={onChange} />
            </div>
          </LexicalComposer>
        )}
      />
    </div>
  );
}
