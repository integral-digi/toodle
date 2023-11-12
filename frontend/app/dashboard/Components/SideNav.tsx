const sections: string[] = [
    "Private", "Workspaces"
];

const hStyle: string = "text-slate-700 text-3xl font-secondary dark:text-white"
const SideNav = () => {
    return (
        <div className="w-96 min-h-screen bg-neutral-100 dark:bg-slate-900">
            <section className="space-y-12 px-12">
                <section className="flex items-center justify-between pt-8">
                    <img src="/assets/logo-main.svg" alt="logo" className="w-40 h-14" />
                    <img src="/assets/switch.svg" alt="switch" className="w-8 h-8" />
                </section>
                <section className="">
                    <h2 className={hStyle}>{sections[0]}</h2>
                </section>
                <section className="">
                    <h2 className={hStyle}>{sections[1]}</h2>
                </section>
            </section>
        </div>
    )
}

export default SideNav;