type ListCardProps = {
    title: String,
    summary: String,
    snippet: String,
    link: String
}

export default function ListCard(props: ListCardProps) {
    return (
        <>
            <div className="border-solid flex border-2 w-[60rem]">
                <div>
                    <div className="text-[2rem]">{props.title}</div>
                    <div className="text-gray-600">{props.summary}</div> <br />
                    <div>overview: {props.snippet}</div><br />
                    

                    <a href={props.link.toString()} className="text-blue-500 border-b-2 border-blue-500">{props.link}</a><br /><br />
                </div>
                
                <div className="pt-[1rem] pr-[1rem]">
                    <input type="checkbox" className="cursor-pointer w-[1.3rem] h-[1.3rem]" />
                </div>
            </div>
            <br />
        </>
        
    )
}