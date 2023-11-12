import CommandIcon from "@/public/assets/CommandIcon"
import PlusIcon from "@/public/assets/PlusIcon"
import TIcon from "@/public/assets/TIcon"

const commandItems = [
    { id: 1, name: "command", icon: <CommandIcon /> },
    { id: 2, name: "key", icon: <TIcon /> }
]
const AddTask = () => {
    return (
        <div className="w-full h-16 bg-neutral-100 rounded-lg border border-gray-300 border-dashed">
           <section className="flex items-center justify-between">
                <section className="flex items-center space-x-11">
                    <PlusIcon />
                    <p className="text-slate-700 text-lg font-primary">New Task</p>
                </section>
                <section className="flex items-center space-x-2">
                    {commandItems.map((item) => (
                        <section key={item.id} className="flex items-center bg-neutral-100 dark:bg-slate-900">
                            <section className="mx-auto w-4 h-4">{item.icon}</section>
                        </section>
                    ))}
                </section>
            </section>
        </div>
    )
}

export default AddTask;