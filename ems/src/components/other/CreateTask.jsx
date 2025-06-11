import React, { useContext, useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/LocalStorage";
import { AuthContext } from "../../context/AuthProvider";

export default function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});
  const [employee, setEmployee] = useState({});
  const [employeesData, setEmployeesData] = useState();

  const { setUserData } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(taskTitle, taskDate, taskDescription, assignTo, category);

    const Task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setNewTask(Task);

    const { employees } = getLocalStorage();
    setEmployeesData(employees);
    console.log(employees);
    employees.forEach((element) => {
      if (element.firstName === assignTo) {
        console.log(element);
        setEmployee(element);
        console.log(employees);
      }
    });

    setTaskDate("");

    setTaskTitle("");
    setAssignTo("");
    setTaskDescription("");
    setCategory("");
  };

  // useEffect(() => {
  //   if (employee.tasks && newTask) {
  //     console.log("Hello from useEffect");
  //     employee.tasks?.push(newTask);
  //     employee.taskCounts.newTask += 1;
  //     console.log(employeesData);
  //     localStorage.setItem("employees", JSON.stringify(employeesData));
  //     const { admin } = getLocalStorage();
  //     console.log(admin);
  //     setUserData({ employees: employeesData, admin });
  //   }
  // }, [newTask, employee]);
  useEffect(() => {
  if (employee.tasks && newTask) {
    console.log("Hello from useEffect");

    const updatedEmployee = {
      ...employee,
      tasks: [...(employee.tasks || []), newTask],
      taskCounts: {
        ...employee.taskCounts,
        newTask: (employee.taskCounts?.newTask || 0) + 1
      }
    };

    const updatedEmployees = employeesData.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    const { admin } = getLocalStorage();
    setUserData({ employees: updatedEmployees, admin });
  }
}, [newTask, employee]);


  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-betwee"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
