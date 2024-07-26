

export default function Page() 
{
    return (true &&
        <div className="flex flex-col w-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 m-1">
                <div className="flex flex-col m-1 outline outline-2">
                    <div className="w-full bg-black text-white min-h-8 max-h-8">
                        <p className="text-left p-1">Hello, my name is Jacob and I write software.</p>
                    </div>
                    <div className="flex">
                        <div>
                            <p className="text-left p-1">
                                My name is Jacob and I do all types of software development projects across freelance, contract, full-time and part-time arrangements. I currently reside just outside of the Tampa Bay Area in Florida.
                            </p>
                        </div>
                        <div className="w-2/3 p-2">
                            <img className="fill-none outline outline-3" src="/static/florida.svg"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grid-cols-1 m-1 outline outline-2 justify-start">
                    <div className="w-full bg-black text-white">
                        <p className="text-left p-1">My software development philosophy</p>
                    </div>
                    <p className="text-left p-1">
                        The software I design is written with efficiency, speed and correctness in mind. I research the best available algorithms to get the job done.
                    </p>
                </div>
                <div className="flex flex-col m-1 outline outline-2">
                    <div className="w-full bg-black text-white min-h-8 max-h-8">
                        <p className="text-left p-1">Available for teaching!</p>
                    </div>
                    <p className="text-left p-1">
                        I am available for teaching clients the languages, technologies, and concepts I am confident in. You can schedule my time on the <a href="/contact" className="underline">contact</a> page.
                    </p>
                </div>
                <div className="flex flex-col m-1 outline outline-2">
                    <div className="w-full bg-black text-white min-h-8 max-h-8">
                        <p className="text-left p-1">Personally, I am...</p>
                    </div>
                    <p className="text-left p-1">
                        ...very passionate about technology! I try to understand every aspect of the computer, from logic design to implement the CPU to the websites that run on them. I am a solid generalist, knowing a little bit of everything. Outside of my computer work, I study philosophy, religion and history.
                    </p>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col m-2 outline outline-2">
                    <div className="w-full bg-black text-white min-h-8 max-h-8">
                        <p className="text-left p-1">Competent Languages, Frameworks, Concepts and Technologies</p>
                    </div>
                    <div className="flex flex-col m-1 w-full">
                        <div className="flex pr-1 pb-1 pl-1 pt-1 w-full">
                            <p className="bg-cyan-500 pl-2 p-1 pr-2 text-left w-1/5">C++</p>
                            <p className="bg-cyan-300 pl-2 p-1 mr-2 text-left w-full">up to C++23; skilled in the constraints of lower standard versions as well. My mother tongue language.</p>
                        </div>
                        <div className="flex pr-1 pb-1 pl-1 w-full">
                            <p className="bg-sky-500 pl-2 p-1 pr-2 text-left w-1/5">C</p>
                            <p className="bg-sky-300 pl-2 p-1 mr-2 text-left w-full">up to C23; skilled in the constraints of lower standard versions as well (ANSI C / C89).</p>
                        </div>
                        <div className="flex pr-1 pb-1 pl-1 w-full">
                            <p className="bg-slate-400 pl-2 p-1 pr-2 text-left w-1/5">Assembly</p>
                            <p className="bg-slate-300 pl-2 p-1 mr-2 text-left w-full">Speak x86 most fluently, can do ARM or RISC-V. Aware of concepts such as ABI, stack, branch alignment, SIMD, cache locality, etc. in order to get the most performance.</p>
                        </div>
                        <div className="flex pr-1 pb-1 pl-1 w-full">
                            <p className="bg-lime-400 pl-2 p-1 pr-2 text-left w-1/5">Qt</p>
                            <p className="bg-lime-300 pl-2 p-1 mr-2 text-left w-full">Used to design complex user interfaces that run on any platform, anywhere from internal tooling to spreadsheet software.</p>
                        </div>
                        <div className="flex pr-1 pb-1 pl-1 w-full">
                            <p className="bg-blue-400 pl-2 p-1 pr-2 text-left w-1/5">Lua</p>
                            <p className="bg-blue-300 pl-2 p-1 mr-2 text-left w-full">An embedded language that I have extensive experience in using. Can be used to extend functionality of a game engine, tooling, or other software.</p>
                        </div>
                        <div className="flex pr-1 pb-1 pl-1 w-full">
                            <p className="bg-green-400 pl-2 p-1 pr-2 text-left w-1/5">Windows</p>
                            <p className="bg-green-300 pl-2 p-1 mr-2 text-left w-full">Anyone knows Windows, right? Well, what I mean is getting into the nitty gritty details of the Windows API, both for drivers and normal applications. This is my main hobby and regularly goes into professional work.</p>
                        </div>
                        <div className="flex pr-1 pb-1 pl-1 w-full">
                            <p className="bg-yellow-400 pl-2 p-1 pr-2 text-left w-1/5">Linux / BSD</p>
                            <p className="bg-yellow-300 pl-2 p-1 mr-2 text-left w-full">Fluent in programming with Linux system architecture such as sysfs, system calls, working with common userland utilities and APIs such as systemd, openrc, POSIX, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}