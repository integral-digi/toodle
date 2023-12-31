import GridIcon from "@/public/assets/GridIcon";
import { timeOfDay, formattedDate } from "./time";
import BoltIcon from "@/public/assets/BoltIcon";
import DarkToggle from "@/public/assets/DarkToggle";

const smallDivs = [
    { id: 1, name: <DarkToggle /> }, 
    { id: 2, name: <BoltIcon /> }, 
    { id: 3, name: <GridIcon /> }
]

const Quickview = ({user, dark}: any) => {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <section className="space-y-2">
                    <section className="flex items-center space-x-5">
                        <h2 className="text-slate-700 dark:text-white text-3xl font-secondary">Good {timeOfDay}, {user}</h2>
                        <img src="/assets/wave.svg" alt="waving hand" className="w-12 h-12" />
                    </section>
                    <p className="text-slate-700 text-base font-primary dark:text-white">
                        {formattedDate}
                    </p>
                </section>
                <section className="flex items-center space-x-2">
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