import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashborad({data,changeUser}) {
  
  return (
    <div className="p-10 bg-[rgb(28,28,28)] h-screen">
      <Header changeUser={changeUser} data={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  );
}

export default EmployeeDashborad;
