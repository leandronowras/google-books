import{useState, useEffect} from 'react'
import {BookItem} from '../components/BookItem'

export function Home() {
    const [booksResult, setBooksResult] = useState([])

    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=vacancy')
        .then(response => response.json())
        .then(data => setBooksResult(data.items))
    }, [])

    console.log(booksResult)
    return (
        <>
            {booksResult.map(book => {
                return <BookItem key={book.id} book={book} />
            })}
        </>
    )
}