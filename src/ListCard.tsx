type ListCardProps = {
    title: String,
    summary: String,
    snippet: String,
    link: String
}

export default function ListCard(props: ListCardProps) {
    return (
        <>
            <div className="border-solid border-2 w-[60rem]">
                <div className="text-[2rem]">{props.title}</div>
                <div className="text-gray-600">{props.summary}</div> <br />
                <div>overview: {props.snippet}</div><br />
                

                <a href={props.link.toString()} className="text-blue-500 border-b-2 border-blue-500">{props.link}</a><br /><br />
                
            </div>
            <br />
        </>
        
    )
}