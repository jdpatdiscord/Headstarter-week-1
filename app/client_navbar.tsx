'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

// Key issue: the JavaScript here is ran on both server and client so different things have to be used to keep the initial layout in sync.

// https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Navbar() {
    const [isDesktopSuitable, setIsDesktopSuitable] = useState(false);

    useIsomorphicLayoutEffect(() => {
        // effects are not executed on the server, so we can assume window exists
        const onResize = () => setIsDesktopSuitable(window.innerWidth >= 1024);

        try {
            window.addEventListener('resize', onResize);
            onResize(); // update isDesktopSuitable immediately
        } finally {
            return () => window.removeEventListener('resize', onResize);
        }
    }, []);


    return (isDesktopSuitable ? 
        <div className="flex flex-none justify-between">
            <div className="w-full outline-slate-950 text-5xl font-normal font-outline-2 text-white bg-slate-300 pt-2 pb-2 mr-1 ml-2 mt-2 outline outline-2">
                <p className="inline text-xl">I'm </p>
                <p className="inline">Jacob</p>
            </div>
            <a className="w-full outline-slate-950 text-5xl font-normal font-outline-2 text-white bg-lime-600 pt-2 pb-2 mr-1 ml-1 mt-2 outline outline-2" href="/blog">Blog</a>
            <a className="w-full outline-slate-950 text-5xl font-normal font-outline-2 text-white bg-rose-600 pt-2 pb-2 mr-1 ml-1 mt-2 outline outline-2" href="/projects">Projects</a>
            <a className="w-full outline-slate-950 text-5xl font-normal font-outline-2 text-white bg-indigo-500 pt-2 pb-2 mr-1 ml-1 mt-2 outline outline-2" href="/contact">Contact</a>
            <a className="w-full outline-slate-950 text-5xl font-normal font-outline-2 text-white bg-amber-400 pt-2 pb-2 mr-2 ml-1 mt-2 outline outline-2" href="/booklist">Books</a>
        </div> 
            : 
        <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-between">
                <div className="flex">
                    <p className="font-outline-2 text-white text-2xl pt-4 pl-2">I'm </p>
                    <p className="text-4xl ml-3 mt-3 font-outline-2 text-white">Jacob Polillo</p>
                </div>
                <label htmlFor="menu">
                    <div className="grid grid-cols-2 min-w-12 min-h-12 w-12 h-12 m-2 outline outline-2">
                        <div className="min-w-6 w-6 min-h-6 h-6 bg-lime-600"></div>
                        <div className="min-w-6 w-6 min-h-6 h-6 bg-rose-600"></div>
                        <div className="min-w-6 w-6 min-h-6 h-6 bg-indigo-500"></div>
                        <div className="min-w-6 w-6 min-h-6 h-6 bg-amber-400"></div>
                    </div>
                </label>
            </div>
            <div className="flex flex-col outline outline-2 collapsible-menu">
                <input type="checkbox" id="menu"></input>
                <div className="menu-content">
                    <a href="/blog"><div className="text-4xl font-outline-2 text-white bg-lime-600">&#x1F4E2; Blog</div></a>
                    <a href="/projects"><div className="text-4xl font-outline-2 text-white bg-rose-600">&#x1F528; Projects</div></a>
                    <a href="/contact"><div className="text-4xl font-outline-2 text-white bg-indigo-500">&#x1F4E7; Contact</div></a>
                    <a href="/books"><div className="text-4xl font-outline-2 text-white bg-amber-400">&#x1F4D6; Book list</div></a>
                </div>
            </div>
        </div>
        )
}

{/* <div className="flex flex-none justify-between">
<div className="flex">
    <p className="font-outline-2 text-white text-2xl pt-4 pl-2">I'm </p>
    <p className="text-4xl ml-3 mt-3 font-outline-2 text-white">Jacob Polillo</p>
</div>
<div className="grid grid-cols-2 min-w-12 min-h-12 w-12 h-12 m-2 outline outline-2">
    <div className="min-w-6 w-6 min-h-6 h-6 bg-lime-600"></div>
    <div className="min-w-6 w-6 min-h-6 h-6 bg-rose-600"></div>
    <div className="min-w-6 w-6 min-h-6 h-6 bg-indigo-500"></div>
    <div className="min-w-6 w-6 min-h-6 h-6 bg-amber-400"></div>
</div>
</div> */}