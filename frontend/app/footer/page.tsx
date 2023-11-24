import AppCard from "./AppCard"
import Socials from "./Connect"
import FooterLinks from "./FooterLinks"
import Legal from "./Legal"
import LogoDiv from "./LogoDiv"
import Subscribe from "./Subscribe"
import TargetBlankCard from "./TargetBlankCard"

const FooterMain = () => {
    return (
        <section className="w-full h-full bg-black px-16 lg:hidden">
            <section className="flex items-start justify-between w-full">
                <section className="space-y-10">
                    <Subscribe />
                    <Socials />
                    <AppCard />
                </section>
                <section className="w-full">
                    <FooterLinks />
                </section>
            </section>
            <section className="flex items-start justify-between">
                <Legal />
                <TargetBlankCard />
            </section>
            <section className="w-full h-full">
                <LogoDiv logoSrc="" />
            </section>
        </section>
    )
}

export default FooterMain;