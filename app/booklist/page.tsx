export default async function Page() 
{
    return (
        <div className="flex flex-col">
            <div className="flex flex-col grid-cols-1 m-1.5 pr-3 justify-start w-full">
                <div className="w-full bg-black text-white">
                    <p className="text-left p-1">Recommended reading! All of these books I have read.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="">
                        <img src="/static/1_conquests_and_cultures_book.jpg" className="max-h-48 min-h-48 min-w-32 max-w-32 outline outline-2 p-1 m-1 ml-2"></img>
                    </div>
                    <div className="w-full mr-1.5 ml-1.5 mt-1">
                        <div className="w-full bg-black text-white ">
                            <p className="text-left p-1">"Conquests and Cultures" by Thomas Sowell</p>
                        </div>
                        <p className="text-left p-1">An influential black author writes about the effects of conquests by other nations in a series of case studies, such as the English conquering Scotland. There are several profound findings in this book that contemporary literature and media do not cover.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="">
                        <img src="/static/2_mao_book.jpg" className="max-h-48 min-h-48 min-w-32 max-w-32 outline outline-2 p-1 m-1 ml-2"></img>
                    </div>
                    <div className="w-full mr-1.5 ml-1.5 mt-1">
                        <div className="w-full bg-black text-white ">
                            <p className="text-left p-1">"Mao" by Jung Chang and Jon Halliday</p>
                        </div>
                        <p className="text-left p-1">Mrs. Jung Chang and Mr. Jon Halliday have written an extensive and researched biography of Mao Zedong, an incredibly influential figure in the rise of The People's Republic of China and the Chinese Communist Party. The book outlines the character flaws, triumphs, sequences of events and other side quests that Mao went through to establish today's China.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="">
                        <img src="/static/3_windows_internals_pt1_book.png" className="max-h-48 min-h-48 min-w-32 max-w-32 outline outline-2 p-1 m-1 ml-2"></img>
                    </div>
                    <div className="w-full mr-1.5 ml-1.5 mt-1">
                        <div className="w-full bg-black text-white ">
                            <p className="text-left p-1">"Windows Internals, Pt. 1" by Pavel Yosifovich, Alex Ionescu, Mark E. Russinovich, and David A. Solomon</p>
                        </div>
                        <p className="text-left p-1">This book is an extensive overview of the Windows system architecture, processes, threads, memory management and more. This is useful for people that have used Windows for years but may want to understand it better as a systems administrator, a programmer or otherwise.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="">
                        <img src="/static/4_a_conflict_of_visions_book.jpg" className="max-h-48 min-h-48 min-w-32 max-w-32 outline outline-2 p-1 m-1 ml-2"></img>
                    </div>
                    <div className="w-full mr-1.5 ml-1.5 mt-1">
                        <div className="w-full bg-black text-white ">
                            <p className="text-left p-1">"A Conflict of Visions" by Thomas Sowell</p>
                        </div>
                        <p className="text-left p-1">A definitive guide to describing the fundamental divide in modern policy political disputes, world views and more. Very useful in understanding how to categorize and understand the very basis of political conflict.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="">
                        <img src="/static/5_windows_kernel_programming_book.jpg" className="max-h-48 min-h-48 min-w-32 max-w-32 outline outline-2 p-1 m-1 ml-2"></img>
                    </div>
                    <div className="w-full mr-1.5 ml-1.5 mt-1">
                        <div className="w-full bg-black text-white ">
                            <p className="text-left p-1">"Windows Kernel Programming" by Pavel Yosifovich</p>
                        </div>
                        <p className="text-left p-1">For seasoned C / C++ programmers and Windows system administrators looking to expand their domain of knowledge, this book is an essential quickstart into understand how drivers work and how to write them.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="">
                        <img src="/static/6_practical_binary_analysis_book.jpg" className="max-h-48 min-h-48 min-w-32 max-w-32 outline outline-2 p-1 m-1 ml-2"></img>
                    </div>
                    <div className="w-full mr-1.5 ml-1.5 mt-1">
                        <div className="w-full bg-black text-white ">
                            <p className="text-left p-1">"Practical Binary Analysis" by Dennios Andriesse</p>
                        </div>
                        <p className="text-left p-1">For seasoned C / C++ programmers and Linux system administrators looking to expand their domain of knowledge, this book is a meticulous introduction into how reverse engineering works with hands on demonstrations, guides, and all code provided.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}