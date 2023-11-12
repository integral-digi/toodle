"use client"
import { useState } from "react";
import AddTask from "./Components/AddTask";
import NoticeCard from "./Components/NoticeCard";
import Quickview from "./Components/Quickview";
import SideNav from "./Components/SideNav";

const authUser: string = "Integral";

const DashHome = () => {
    const [isDark, setIsDark] = useState(false);
    const handleDark = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark', isDark);
    }
    return (
        <main className="w-full bg-white dark:bg-[#001523]">
            <div className="flex">
                <section className="w-1/4">
                    <SideNav />
                </section>
                <section className="w-3/4 px-24 pt-8 space-y-12">
                    <Quickview user={authUser} dark={handleDark} />
                    <NoticeCard />
                    <AddTask />
                </section>
            </div>
        </main>
    )
}

export default DashHome;