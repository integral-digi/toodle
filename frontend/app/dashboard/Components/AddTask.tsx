import CommandIcon from "@/public/assets/CommandIcon"
import PlusIcon from "@/public/assets/PlusIcon"
import TIcon from "@/public/assets/TIcon"

const commandItems = [
    { id: 1, name: "command", icon: "/assets/Vector.svg" },
    { id: 2, name: "key", icon: "/assets/T.svg" }
]

const AddTask = () => {
    return (
        <>
            <div className="w-full h-16 bg-neutral-100 dark:bg-slate-900 rounded-lg border border-gray-300 border-dashed px-6 py-4">
                <section className="flex items-center justify-between ">
                    <section className="flex items-center space-x-11">
                        <PlusIcon />
                        <p className="text-slate-700 text-lg font-primary dark:text-white">New Task</p>
                    </section>
                    <section className="flex items-center space-x-2">
                        {commandItems.map((item) => (
                            <section key={item.id} className="flex items-center rounded-md bg-white w-6 h-6">
                                <img className="w-3 h-3 mx-auto" src={item.icon} alt={item.name} />
                            </section>
                        ))}
                    </section>
                </section>
            </div> 
        </>
    )
}

export default AddTask;