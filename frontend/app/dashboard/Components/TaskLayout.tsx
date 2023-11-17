"use client"
import { useState } from "react";
import GrabberIcon from "@/public/assets/GrabberIcon";
import { taskCategories } from "./Tasks";

const TaskLayout = () => {
  const [checkedTasks, setCheckedTasks] = useState([]);

  const handleCheck = (taskId: any) => {
    setCheckedTasks((prevCheckedTasks: any) => {
      if (prevCheckedTasks.includes(taskId)) {
        return prevCheckedTasks.filter((id: any) => id !== taskId);
      } else {
        return [...prevCheckedTasks, taskId];
      }
    });
  };

  return (
    <div className="space-y-12 w-full">
      {taskCategories.map((category) => (
        <section key={category.id} className="w-full space-y-9">
          <p className="text-slate-700 dark:text-white text-lg font-secondary">{category.name}</p>
          <section className="space-y-9 w-full">
            {category.tasks.map((task) => (
              <section
                key={task.taskId}
                className={`px-2 flex items-center justify-between w-full lg:items-start ${checkedTasks.includes(task.taskId) ? "h-max py-2 bg-neutral-100 dark:bg-slate-900 rounded-lg" : ""}`}
              >
                <section className="flex items-center space-x-4">
                  <GrabberIcon />
                  <input
                    type="checkbox"
                    onChange={() => handleCheck(task.taskId)}
                    checked={checkedTasks.includes(task.taskId)}
                    className=" checked:text-slate-700 checked:dark:text-white w-5 h-5 rounded-lg border-2 border-gray-300 text-transparent dark:bg-transparent"
                  />
                  <p className={`text-slate-700 dark:text-white text-lg font-primary md:text-base ${checkedTasks.includes(task.taskId) ? "line-through" : ""}`}>
                    {task.title}
                  </p>
                </section>
                <section className="flex justify-end items-center space-x-4 lg:hidden">
                  <section
                    className="rounded-full w-8 h-8 bg-indigo-300 flex items-center justify-center"
                  >
                    {task.collaborator?.map((member, index) => (
                      <p
                        key={index}
                        className="text-slate-700 text-base font-secondary"
                      >
                        {member.charAt(0).toUpperCase()}
                      </p>
                    ))}
                  </section>
                  <section className="flex items-center justify-center py-1 px-2 font-primary bg-orange-200 rounded-xl">
                    {task.dueDate}
                  </section>
                  <img
                    src="/assets/more.svg"
                    alt="more"
                    className="w-6 h-6"
                  />
                </section>
              </section>
            ))}
          </section>
        </section>
      ))}
    </div>
  );
};

export default TaskLayout;
