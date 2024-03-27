import GridIcon from "@/public/assets/GridIcon";
import { timeOfDay, formattedDate } from "./time";
import DarkToggle from "@/public/assets/DarkToggle";
import { BoltIcon, MoonIcon, Square2StackIcon, Squares2X2Icon } from "@heroicons/react/16/solid";

const smallDivs = [
    { id: 1, name: <MoonIcon className="dark:text-white text-slate-700 w-4 h-4" /> }, 
    { id: 2, name: <BoltIcon className="dark:text-white text-slate-700 w-4 h-4" /> }, 
    { id: 3, name: <Squares2X2Icon className="dark:text-white text-slate-700 w-4 h-4" />  }
]

const Quickview = ({user, dark}: any) => {
    return (
        <>
            <div className="flex items-center justify-between w-full ">
                <section className="space-y-2">
                    <section className="flex items-center space-x-5">
                        <h2 className="text-slate-700 dark:text-white text-3xl font-secondary lg:text-2xl">Good {timeOfDay}, {user}</h2>
                        <img src="/assets/wave.svg" alt="waving hand" className="w-12 h-12 lg:w-8 lg:h-8" />
                    </section>
                    <p className="text-slate-700 text-base font-primary dark:text-white">
                        {formattedDate}
                    </p>
                </section>
                <section className="flex items-center space-x-2 lg:hidden">
                    {smallDivs.map((item)=>(
                        <section key={item.id} className="w-8 h-8 flex items-center rounded-md bg-neutral-100 dark:bg-slate-900">
                            {item.id === 1 
                            ? <section className="w-4 h-4 mx-auto cursor-pointer" onClick={dark}>{item.name}</section> 
                            : <section className="w-4 h-4 mx-auto">{item.name}</section>
                            }
                        </section>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Quickview;