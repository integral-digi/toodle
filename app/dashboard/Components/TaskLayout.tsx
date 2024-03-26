"use client"
import { Fragment, useState } from "react";
import GrabberIcon from "@/public/assets/GrabberIcon";
import { taskCategories } from "./Tasks";
import Draggable from "react-draggable";
import { Popover, Transition } from "@headlessui/react";
import MorePanel from "./MorePanel";

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
                    <section className="space-x-2 flex items-center">
                      {task.collaborator?.map((member, index) => (
                        <section key={index} className="rounded-full w-8 h-8 bg-indigo-300 flex items-center justify-center  z-10">
                          <p className="text-slate-700 text-base font-secondary">
                            {member.charAt(0).toUpperCase()}
                          </p>
                        </section>
                      ))}
                    </section>
                    <section className="flex items-center justify-center py-1 px-2 font-primary bg-orange-200 rounded-xl">
                      {task.dueDate}
                    </section>
                    <Popover className="relative">
                      <Popover.Button className="z-10">
                        <img
                          src="/assets/more.svg"
                          alt="more"
                          className="w-6 h-6 z-10"
                        />
                      </Popover.Button>
                      <Transition
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute -top-2 right-0 z-50 shadow-md rounded-md">
                          <MorePanel />
                        </Popover.Panel>
                      </Transition>
                    </Popover>
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
