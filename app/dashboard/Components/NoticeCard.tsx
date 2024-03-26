"use client"
import CloseIcon from "@/public/assets/CloseIcon";
import { useState } from "react";

const message: string = "Welcome aboard! We're thrilled to have you on board our project planner journey! Get ready to transform your ideas into reality. Navigate through tasks, conquer milestones, and watch your projects soar to new heights. Let's turn your plans into achievements!";

const NoticeCard = () => {
  const [closeCard, setCloseCard] = useState(false);

  const handleClick = () => {
    setCloseCard(!closeCard);
  };

  return (
    <>
      <div className={`${closeCard ? "hidden" : ""} w-full relative`}>
        <section className="w-full h-full py-6 bg-neutral-100 rounded-xl px-6 flex items-center dark:bg-slate-900">
          <section className="flex items-start space-x-10 md:space-x-3">
              <img src="/assets/rocket.svg" alt="launch" className="w-8 h-8 lg:w-6 lg:h-6" />
              <p className="text-slate-700 text-lg font-primary w-[88%] dark:text-white md:text-sm">{message}</p>
          </section>
        </section>
        <section className="absolute bg-white dark:bg-slate-700 flex items-center p-1 rounded-full shadow-md -top-2 right-0 w-6 h-6 cursor-pointer" onClick={handleClick}>
          <CloseIcon />
        </section>
      </div>
    </>
  );
};

export default NoticeCard;