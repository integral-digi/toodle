"use client";
import { useState } from "react";
import { taskCategories } from "./Tasks";
import Logo from "@/public/assets/Logo";
import { ArrowsRightLeftIcon, Bars3Icon } from "@heroicons/react/16/solid";
import { PlusIcon } from "@heroicons/react/16/solid";

const SideNav = () => {
  const [isActive, setIsActive] = useState<number | null>(1); 

  const handleActive = (id: number) => {
    // Toggle the active state
    setIsActive(id === isActive ? null : id); 
  };

  const sections: string[] = ["Private", "Workspaces"];

  const commandItems = [
    { id: 1, name: "command", icon: "/assets/Vector.svg" },
    { id: 2, name: "key", icon: "/assets/L.svg" },
  ];

  const hStyle: string = "text-slate-700 text-3xl font-secondary dark:text-white";

  return (
    <>
      <div className="w-96 h-full min-h-screen bg-neutral-100 dark:bg-slate-900 fixed overflow-y-scroll will-change-scroll">
        <section className="space-y-12 px-12">
          <section className="flex items-center justify-between pt-8">
            <section className="w-40 h-14">
              <Logo />
            </section>
            <section className="w-8 h-8">
              <ArrowsRightLeftIcon className="dark:text-white text-slate-700 w-8 h-8" />
            </section>
          </section>
          <section className="space-y-8">
            <h2 className={hStyle}>{sections[0]}</h2>
            <section className="space-y-12">
              <section className="space-y-12">
                {taskCategories.map((item) => (
                  <section
                    key={item.id}
                    className={`${
                      isActive === item.id ? "flex items-center cursor-pointer justify-between px-2 h-10 bg-gray-300 bg-opacity-50 rounded-md" : "flex items-center cursor-pointer justify-between pl-2" 
                    }`}
                    onClick={() => handleActive(item.id)}
                  >
                    <section className="flex items-center space-x-3">
                      <Bars3Icon className="dark:text-white text-slate-700 w-4 h-4" />
                      {item.icon}
                      <p className="text-slate-700 dark:text-white text-lg font-primary">
                        {item.name}
                      </p>
                    </section>
                    <section className="flex items-center justify-around bg-white rounded-md w-6 h-6">
                      <p className="text-slate-700 text-xs font-secondary">
                        {item.tasks.length}
                      </p>
                    </section>
                  </section>
                ))}
              </section>
              <section className="flex items-center justify-between">
                <section className="flex items-center space-x-3">
                  <PlusIcon className="dark:text-white text-slate-700 w-4 h-4" />
                  <p className="text-slate-700 dark:text-white text-lg font-primary">
                    Create new list
                  </p>
                </section>
                <section className="flex items-center space-x-2">
                  {commandItems.map((item) => (
                    <section
                      key={item.id}
                      className="flex items-center rounded-md bg-white w-6 h-6"
                    >
                      <img
                        className="w-3 h-3 mx-auto"
                        src={item.icon}
                        alt={item.name}
                      />
                    </section>
                  ))}
                </section>
              </section>
            </section>
          </section>
          <section className="w-full">
            <h2 className={hStyle}>{sections[1]}</h2>
          </section>
        </section>
      </div>
    </>
  );
};

export default SideNav;
