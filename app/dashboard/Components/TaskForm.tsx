"use client";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { taskCategories } from "./Tasks";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const pStyle: string = "text-slate-700 dark:text-white text-base font-primary";
const sectionStyle: string = "space-y-3";

const formLabels: string[] = [
  "Select Task List",
  "Due Date",
  "Task Title",
  "Task Description"
];

const TaskForm = () => {
    const [selectedTask, setSelectedTask] = useState(taskCategories[0]);
    const [query, setQuery] = useState('');
  
    const filteredTasks =
      query === ''
        ? taskCategories
        : taskCategories.filter((task) => task.name.toLowerCase().includes(query.toLowerCase()));
  
    return (
      <div className="space-y-9 relative">
        <section className="space-y-9">
          <section className={sectionStyle}>
            <p className={pStyle}>{formLabels[0]}</p>
            <Combobox value={selectedTask} onChange={setSelectedTask}>
                <section className="relative">
                    <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                        className="w-full h-12 rounded-lg bg-transparent text-slate-700 dark:text-white font-primary border border-gray-300 dark:border-slate-700 pl-4 placeholder:font-primary"
                        placeholder="Select Task List"
                    />
                    <Combobox.Button className="absolute top-4 right-4">
                        <ChevronUpDownIcon className="dark:text-white text-slate-700 w-4 h-4"/>
                    </Combobox.Button>
              </section>
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredTasks.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-slate-700 font-primary">
                    Nothing found.
                  </div>
                ) : (
                  filteredTasks.map((item) => (
                    <Combobox.Option
                      key={item.name}
                      value={item.name}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-slate-700 text-white font-primary' : 'text-slate-700 font-primary'
                        }`
                      }
                    >
                      {item.name}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Combobox>
          </section>
          <section className={sectionStyle}>
            <p className={pStyle}>{formLabels[1]}</p>
            <input className="w-full h-12 rounded-lg border border-gray-300 dark:border-slate-700 font-primary px-4 bg-transparent dark:text-white" type="date" required />
          </section>
          <section className={sectionStyle}>
            <p className={pStyle}>{formLabels[2]}</p>
            <input className="w-full h-12 rounded-lg border border-gray-300 dark:border-slate-700 font-primary pl-4 bg-transparent dark:text-white" type="text" required />
          </section>
          <section className={sectionStyle}>
            <p className={pStyle}>{formLabels[3]}</p>
            <textarea className="w-full h-24 rounded-lg border border-gray-300 dark:border-slate-700 font-primary pl-4 pt-2 bg-transparent dark:text-white" rows={4} required />
          </section>
        </section>
        <button
          className="w-full h-12 bg-slate-900 dark:bg-white dark:text-slate-700 rounded-lg flex items-center justify-center font-secondary text-lg text-white"
          type="submit"
        >
          Continue
        </button>
      </div>
    );
  };
  
  export default TaskForm;  