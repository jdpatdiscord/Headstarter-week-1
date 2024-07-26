export default async function Page() 
{
    return (
        <div>
            <div className="flex flex-col grid-cols-1 m-2 outline outline-2 justify-start">
                <div className="w-full bg-black text-white">
                    <p className="text-left p-1">Contact form</p>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row p-1">
                        <div className="flex flex-row">
                            <p className="pr-2 pl-2">Email</p>
                            <input type="text" className="bg-slate-200 border border-black"></input>
                        </div>
                        <div className="flex flex-row w-full">
                            <p className="pr-2 pl-2">Subject</p>
                            <input type="text" className="bg-slate-200 border border-black w-full"></input>
                        </div>
                    </div>
                    <textarea rows={4} cols={50} className="m-2 bg-slate-200 border border-black">

                    </textarea>
                    <button>
                        Test
                    </button>
                </div>
            </div>
        </div>
    )
}