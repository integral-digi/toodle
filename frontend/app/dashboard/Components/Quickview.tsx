import { timeOfDay, formatDateToMonthDay } from "./time";

const currentDate = new Date();
const formattedDate = formatDateToMonthDay(currentDate);

const smallDivs = [
    {id: 1, name: "crescent"}, 
    {id: 2, name: "bolt"}, 
    {id: 3, name: "grid"}
]

const Quickview = ({user}: any) => {
    return (
        <div className="flex items-center justify-between w-full">
            <section className="space-y-2">
                <section className="flex items-center space-x-5">
                    <h2 className="text-slate-700 text-3xl font-secondary">Good {timeOfDay}, {user}</h2>
                    <img src="/assets/wave.svg" alt="waving hand" className="w-12 h-12" />
                </section>
                <p className="text-slate-700 text-base font-primary dark:text-white">
                    It's {formattedDate}
                </p>
            </section>
            <section className="flex items-center space-x-2">
                {smallDivs.map((item)=>(
                    <section key={item.id} className="w-8 h-8 flex items-center rounded-md bg-neutral-100 dark:bg-slate-900">
                        <img src={`/assets/${item.name}.svg`} alt={item.name} className="w-4 h-4 mx-auto" />
                    </section>
                ))}
            </section>
        </div>
    )
}

export default Quickview;