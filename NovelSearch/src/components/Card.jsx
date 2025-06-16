import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const{author_name,title,language,first_publish_year,cover_edition_key}=book
console.log(author_name)
  return (
    <Link to={`/book/${cover_edition_key}`}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl hover:scale-[1.01] transition-all duration-200 cursor-pointer w-full max-w-md">
        <h2 className="text-xl font-semibold mb-1 text-[#2C786C]">{title}</h2>
        <p className="text-sm text-gray-600 mb-1">
          {author_name[0]} &bull; {first_publish_year}
        </p>
        <p className="text-sm text-gray-700 mb-2 line-clamp-2">
          {searchInfo?.textSnippet || description || "No description available."}
        </p>
        {language && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {language[0]}
          </span>
        )}
      </div>
    </Link>
  );
}