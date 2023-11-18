interface LinkProps {
    name: string;
    href: string;
}

interface ColumnProps {
    id: number,
    title: string;
    links: LinkProps[];
}


export const columns: ColumnProps[] = [
    {
        id: 1,
        title: "Popular",
        links: [
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"}
        ]
    },
    {
        id: 2,
        title: "Resources",
        links: [
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"}
        ]
    },
    {
        id: 3,
        title: "Connect",
        links: [
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"}
        ]
    },
    {
        id: 4,
        title: "Careers",
        links: [
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"},
            {name: "link one", href: "#"}
        ]
    },
];