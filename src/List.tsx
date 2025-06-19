import { useEffect, useState } from 'react';
import ListCard from './ListCard';

type ListProps = {
    query: String
}

type SearchResults = {
    title: String,
    snippet: String,
    link: String,
    publication_info: {
        summary: String
    }
}



export default function List(props: ListProps) {
    // useState for the data here
    const [searchResults, setSearchResults] = useState<SearchResults[]>()

    useEffect(() => {
        fetchData() 
    }, [])

    async function fetchData() {
        const url = `http://localhost:3000/?q=${props.query}`
        try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(data)



        } catch(error: unknown) {
        if (error instanceof Error) {
            error.message // works, `e` narrowed to Error
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
                                  link={researchPaper.link} />
                    )
                    })
                }
            </div>
        </>
    )
}