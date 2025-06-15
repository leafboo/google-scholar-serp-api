import { useEffect, useState } from 'react';
import ListCard from './ListCard';

type ListProps = {
    query: String
}


export default function List(props: ListProps) {
    // useState for the data here
    const [searchResults, setSearchResults] = useState()

    useEffect(() => {
        // fetchData() make this a comment for now to not waste query attempts in SerpApi
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
            <div className='overflow-y-auto h-[20rem]'>
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
                <ListCard />
            </div>
        </>
    )
}