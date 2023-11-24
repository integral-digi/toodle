import { Fragment } from "react";

interface MoreChildrenProps {
    id: number;
    name: string;
    onclick: string;
}

const moreChildren: MoreChildrenProps[] = [
    { id: 1, name: "Edit", onclick: "" },
    { id: 2, name: "Delete", onclick: "" },
    { id: 3, name: "Mark as complete", onclick: "" }
]

const MorePanel = () => {
    return (
        <>
            <section className="w-60 bg-white dark:bg-slate-900 py-4 rounded-md z-50">
                <section className="space-y-8">
                    {moreChildren.map((child) => (
                        <section key={child.id} className="w-full space-y-6">
                            <p className="text-slate-700 dark:text-white text-sm font-primary pl-8">
                                {child.name}
                            </p>
                            {/* <hr className="w-full h-px bg-neutral-100 dark:bg-slate-700 last:hidden" /> */}
                        </section>
                    ))}
                </section>
            </section>
        </>
    )
}

export default MorePanel;