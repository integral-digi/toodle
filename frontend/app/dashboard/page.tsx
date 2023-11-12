import AddTask from "./Components/AddTask";
import NoticeCard from "./Components/NoticeCard";
import Quickview from "./Components/Quickview";
import SideNav from "./Components/SideNav";

const authUser: string = "Joanna";

const DashHome = () => {
    return (
        <main className="">
            <div className="flex">
                <section className="w-1/4">
                    <SideNav />
                </section>
                <section className="w-3/4 px-24 pt-8 space-y-12">
                    <Quickview user={authUser}/>
                    <NoticeCard />
                    <AddTask />
                </section>
            </div>
        </main>
    )
}

export default DashHome;