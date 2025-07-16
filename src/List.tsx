import { useEffect, useState } from 'react';
import ListCard from './ListCard';
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'



type SelectedPaper = {
    id: string
}

type ListProps = {
    query: string | null;
    updateSelectedPapers: (obj: SelectedPaper, isChecked: boolean) => void;
}

type SearchResults = {
    result_id: string;
    title: string;
    snippet: string;
    link: string;
    publication_info: {
        summary: string;
    }
}



export default function List(props: ListProps) {
    // useState for the data here
    const [searchResults, setSearchResults] = useState<SearchResults[]>()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!props.query) {
            console.log("Search query is null")
        } else {
            fetchData()
            
        }
    }, [props.query])


    async function fetchData() {
        const url = `http://localhost:3000/?q=${props.query}`
        try {
        setIsLoading(true) // re-renders first

        const response = await fetch(url); // remove from the call stack
        const data = await response.json();

        setSearchResults(data)
        setIsLoading(false)

        } catch(error: unknown) {
        if (error instanceof Error) {
            error.message 
        }
        }
    }

    const searchResultsElement = searchResults?.map(researchPaper => <ListCard id={researchPaper.result_id}
                                                                               title={researchPaper.title}
                                                                               summary={researchPaper.publication_info.summary}
                                                                               snippet={researchPaper.snippet}
                                                                               link={researchPaper.link}
                                                                               updateSelectedPapers={props.updateSelectedPapers}  />)

    // this is called the 'React Element'
    // 'React Element' is the jsx part of React
    return (
        <>
            {
                isLoading ?  
                <div className='overflow-y-scroll h-[36rem] flex justify-center items-center'>
                    <TailChase size="40" speed="1.75" color="gray" />
                </div> : 
                <div className='overflow-y-scroll h-[36rem]'>
                    {searchResultsElement}
                </div> 
            
            }
            
        </>
    )
}