import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TaskForm from "./TaskForm";
import CloseIcon from "@/public/assets/CloseIcon";

const TaskPopup = ({isOpen, setIsOpen}: any) => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog 
          as="div"
          open={isOpen} 
          onClose={() => setIsOpen(false)} 
          className="p-4 bg-white relative z-10"
        >  
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 z-0" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel 
              className="px-8 pt-1 pb-6 space-y-12 align-middle shadow-xl transition-all max-w-2xl transform z-50 bg-white dark:bg-[#001523] mx-auto -mt-[980px] rounded-2xl">
              <div 
                className="w-6 h-6 cursor-pointer absolute top-12 right-8" 
                onClick={()=> setIsOpen(false)}
              >
                <CloseIcon />
              </div>
              <Dialog.Title className="text-slate-700 dark:text-white text-2xl font-secondary text-center">
                New Task
              </Dialog.Title>
              <div className="w-full">
                  <TaskForm />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    )
  }

export default TaskPopup;