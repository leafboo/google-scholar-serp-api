import {type ChangeEvent, useState, useEffect} from "react";

type SelectedPaper = {
    id: string
}

type ListCardProps = {
    title: string;
    summary: string;
    snippet: string;
    link: string;
    updateSelectedPapers: (obj: SelectedPaper) => void;
}

export default function ListCard(props: ListCardProps) {

    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        console.log(isChecked);

        if (isChecked) {
            props.updateSelectedPapers({id: "sample id"});
        } else {
            // if the user unchecks the checked checkbox, you should remove the id of this card in the selectedPapers array of objects in the App.tsx
        }

    }, [isChecked]);


    function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked);
    }




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
                    <input type="checkbox" className="cursor-pointer w-[1.3rem] h-[1.3rem]" onChange={handleCheckboxChange} />
                </div>
            </div>
            <br />
        </>
        
    )
}