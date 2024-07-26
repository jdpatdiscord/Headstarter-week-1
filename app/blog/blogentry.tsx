export function BlogEntry(props)
{
    return (
    <div className="flex m-2 outline-2 outline-black min-h-36 h-36">
        <div>
            <a href={props.blogRef} className="fill-div">
                <img src={props.icon} className="border-2 border-black">
                </img>
            </a>
        </div>
        <div className="flex ml-1 flex-col w-full">
            <div className="flex flex-row text-left pl-2 pt-1 pb-1 bg-black text-white">
                <p>{props.title}</p>
                <p className="text-sm text-slate-50/60">{props.created}</p>
            </div>
            <p className="text-left pl-2 pt-1 pb-1">{props.description}</p>
        </div>
    </div>
    )
}