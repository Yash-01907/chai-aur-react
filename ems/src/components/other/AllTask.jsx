import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const {userData} = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] rounded p-5 mt-5  ">
      <div className="bg-red-300 mb-2 px-4 py-2 flex justify-between rounded">
        <h2 className=" text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className=" text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className=" text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className=" text-lg font-medium w-1/5 ">Completed Task</h5>
        <h5 className=" text-lg font-medium w-1/5 ">Failed Task</h5>
      </div>
      <div className="" id="tasklist" >
        {userData.employees.map((emp, idx) => (
          <div 
         
            key={idx}
            className="bg-transparent border-2 border-emerald-400 mb-2 px-4 py-2 flex justify-between rounded"
          >
            <h2 className="text-lg font-medium w-1/5 ">{emp.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 !text-blue-600">{emp.taskCounts.newTask}</h3>
            <h5 className="text-lg font-medium w-1/5 !text-yellow-400">{emp.taskCounts.active}</h5>
            <h5 className="text-lg font-medium w-1/5 !text-green-600">{emp.taskCounts.completed}</h5>
            <h5 className="text-lg font-medium w-1/5 !text-red-600">{emp.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
