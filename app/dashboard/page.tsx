"use client"
import { useState } from "react";
import AddTask from "./Components/AddTask";
import NoticeCard from "./Components/NoticeCard";
import Quickview from "./Components/Quickview";
import SideNav from "./Components/SideNav";
import TaskPopup from "./Components/TaskPopup";
import TaskLayout from "./Components/TaskLayout";

const authUser: string = "Integral";

const Dash = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    const [isDark, setIsDark] = useState(false);
    const handleDark = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark', isDark);
    }
    return (
        <main className="w-full h-full min-h-screen bg-white dark:bg-[#001523] relative">
            <div className="flex h-full">
                <section className="w-1/4 h-full pb-28 lg:hidden">
                    <SideNav />
                </section>
                <section className="w-3/4 py-8 flex lg:w-full justify-center px-20 lg:px-8">
                    <section className="space-y-12 mx-auto w-full">
                        <Quickview user={authUser} dark={handleDark} />
                        <NoticeCard />
                        <AddTask openModal={openModal} />
                        <TaskLayout />
                    </section>
                </section>
                <TaskPopup isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </main>
    )
}

export default Dash;