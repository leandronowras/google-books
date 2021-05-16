import{useState, useEffect} from 'react'
import axios from 'axios'
import {BookItem} from '../components/BookItem'
import {SearchBar} from '../components/SearchBar'

import searchIcon from '../svg/search.svg'

export function Home() {
    const [booksResult, setBooksResult] = useState([])
    const [query, setQuery] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=${query}`
          )
          .then(res => setBooksResult(res.data.items))
        }
      }

    console.log(booksResult)
    console.log(query)
    return (
        <>
            <SearchBar>
                <img src={searchIcon} alt="search icon" />
                <input 
                    placeholder="Search for books" 
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </SearchBar>

            {booksResult.map(book => {
                return <BookItem key={book.id} book={book} />
            })}
        </>
    )
}