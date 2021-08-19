import React from "react";
import LinkItem from "./LinkItem";




const links = [
    {
        title: 'Overview', 
        url: '/overview',
        path: `M9.24731 0C14.218 0 18.2473 4.0293 18.2473 9C18.2473 13.9707 14.218 18 9.24731 18C4.27661 18 0.247314 13.9707 0.247314 9C0.247314 4.0293 4.27661 0 9.24731 0ZM9.24731 1.8C5.27111 1.8 2.04731 5.0238 2.04731 9C2.04731 12.9762 5.27111 16.2 9.24731 16.2C13.2235 16.2 16.4473 12.9762 16.4473 9C16.4473 5.0238 13.2235 1.8 9.24731 1.8ZM9.24731 2.7C10.1635 2.7 11.0338 2.8953 11.8195 3.2472L10.4128 4.653C10.0411 4.554 9.65051 4.5 9.24731 4.5C6.76241 4.5 4.74731 6.5151 4.74731 9C4.74731 10.242 5.25131 11.367 6.06491 12.1824L4.79231 13.455L4.65191 13.3101C3.59531 12.1833 2.94731 10.6668 2.94731 9C2.94731 5.5206 5.76791 2.7 9.24731 2.7ZM15.0001 6.4287C15.3511 7.2135 15.5473 8.0847 15.5473 9C15.5473 10.7397 14.8417 12.3147 13.7023 13.455L12.4297 12.1824C13.2433 11.367 13.7473 10.242 13.7473 9C13.7473 8.5968 13.6942 8.2062 13.5943 7.8345L15.0001 6.4287ZM13.0651 3.9087L14.3386 5.1813L10.987 8.5347C11.0266 8.6832 11.0473 8.8389 11.0473 9C11.0473 9.9945 10.2418 10.8 9.24731 10.8C8.25281 10.8 7.44731 9.9945 7.44731 9C7.44731 8.0055 8.25281 7.2 9.24731 7.2C9.40841 7.2 9.56411 7.2207 9.71261 7.2603L13.066 3.9087H13.0651Z`,
        subLinks: []
    },
    {
        title: 'Verification', 
        url: '/dashboard',
        path: `M8 13.167c3.052 0 5.72 1.312 7.172 3.27l-1.535.726c-1.181-1.4-3.264-2.33-5.637-2.33-2.372 0-4.456.93-5.637 2.33l-1.535-.726c1.452-1.959 4.12-3.27 7.172-3.27zm0-12.5a4.167 4.167 0 014.167 4.166v2.5a4.167 4.167 0 01-3.986 4.163L8 11.5a4.167 4.167 0 01-4.167-4.167v-2.5A4.167 4.167 0 017.82.671L8 .667zm0 1.666a2.5 2.5 0 00-2.496 2.354l-.004.146v2.5a2.5 2.5 0 004.996.147l.004-.147v-2.5a2.5 2.5 0 00-2.5-2.5z`,
        subLinks: []
    },
    {
        title: 'Activation', 
        url: '/activation/get-started',
        path: `M7.763 7.847L15.61 0l1.413 1.414-1.413 1.414 2.473 2.474-1.413 1.414-2.475-2.474-1.413 1.413 2.12 2.12-1.414 1.415-2.12-2.121L9.177 9.26a5 5 0 11-8.05-.41 4.999 4.999 0 016.636-1.003zm-.637 6.291a3 3 0 10-4.24-4.24 3 3 0 004.241 4.241z`,
        subLinks: []
    },
    {
        title: 'Developers', 
        url: '/developers/api-logs',
        path: `M21.333 8l-5.028 5.028-1.257-1.256L18.82 8l-3.772-3.772 1.257-1.256L21.333 8zM2.513 8l3.772 3.772-1.257 1.256L0 8l5.028-5.028 1.256 1.256L2.514 8zM8.7 16H6.81l5.824-16h1.891L8.7 16z`,
        subLinks: [
            {
                title: 'Documentation', 
                url: '/developers/api-logs'
            },
            {
                title: 'API logs', 
                url: '/developers/api-logs'
            },
            {
                title: 'Webhooks', 
                url: '/developers/webhooks'
            },
            {
                title: 'Events', 
                url: '/developers/events'
            },
            
           ]
    },
    {
        title: 'Settings', 
        url: '/settings/general',
        path: `M7.294 2.5L9.543.253a.862.862 0 011.22 0l2.247 2.249h3.18a.863.863 0 01.862.862v3.179L19.3 8.79a.862.862 0 010 1.22l-2.248 2.248v3.179a.863.863 0 01-.863.862H13.01l-2.248 2.248a.863.863 0 01-1.22 0L7.295 16.3H4.116a.862.862 0 01-.863-.862v-3.179L1.005 10.01a.862.862 0 010-1.22l2.248-2.248V3.363a.862.862 0 01.863-.862h3.178zM4.978 4.227v3.03L2.835 9.4l2.143 2.143v3.031h3.031l2.143 2.144 2.144-2.144h3.03v-3.03L17.47 9.4l-2.143-2.143V4.226h-3.031l-2.144-2.143L8.01 4.226H4.978zm5.174 8.624a3.45 3.45 0 110-6.899 3.45 3.45 0 010 6.899zm0-1.725a1.725 1.725 0 100-3.45 1.725 1.725 0 000 3.45z`,
        subLinks: []
    },
    {
        title: 'Support', 
        url: '/support',
        path: `M15.495 5.727h.87A1.637 1.637 0 0118 7.363v3.273a1.636 1.636 0 01-1.637 1.636h-.869A6.547 6.547 0 019 18v-1.636a4.91 4.91 0 004.91-4.91v-4.91a4.91 4.91 0 00-9.819 0v5.728H1.636A1.636 1.636 0 010 10.636V7.363a1.636 1.636 0 011.636-1.636h.87a6.547 6.547 0 0112.99 0zM1.636 7.363v3.273h.819V7.363h-.819zm13.91 0v3.273h.818V7.363h-.818zM5.531 12.097l.867-1.388c.78.488 1.682.747 2.602.745a4.886 4.886 0 002.602-.745l.868 1.388A6.515 6.515 0 019 13.09a6.515 6.515 0 01-3.469-.994z`,
        subLinks: []
    },
]

const Sidebar = () => {
    return(
        <aside className="w-1/5 xl:w-1/6 h-screen bg-white text-black px-6 fixed top-16 lg:top-20 left-0 py-12 space-y-12 hidden md:block">
            {links.map((link, i) => (
                <LinkItem title={link.title} path={link.path} subLinks={link.subLinks} url={link.url} key={i}/>
            ))}
        </aside>
    )
}

export default Sidebar;