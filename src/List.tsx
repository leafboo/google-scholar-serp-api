import { useEffect, useState } from 'react';
import ListCard from './ListCard';

type SelectedPaper = {
    id: string
}

type ListProps = {
    query: string | null;
    updateSelectedPapers: (obj: SelectedPaper) => void;
}

type SearchResults = {
    title: string,
    snippet: string,
    link: string,
    publication_info: {
        summary: string
    }
}



export default function List(props: ListProps) {
    // useState for the data here
    const [searchResults, setSearchResults] = useState<SearchResults[]>()

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
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(data)

        } catch(error: unknown) {
        if (error instanceof Error) {
            error.message 
        }
        }
    }


    return (
        <>
            <div className='overflow-y-scroll h-[36rem]'>
                {
                    searchResults?.map(researchPaper => {
                    return (
                        <ListCard title={researchPaper.title}
                                  summary={researchPaper.publication_info.summary}
                                  snippet={researchPaper.snippet}
                                  link={researchPaper.link}
                                  updateSelectedPapers={props.updateSelectedPapers}  />
                    )
                    })
                }
            </div>
        </>
    )
}