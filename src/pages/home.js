import{useState, useEffect} from 'react'
import axios from 'axios'

import FavoriteMenu from '../components/FavoriteMenu' 
import { FavoriteNavbar } from '../components/FavoriteNavbar'
import { BookItem } from '../components/BookItem'
import { SearchBar } from '../components/SearchBar'

import { BookContext } from '../contexts/BookContext'

import searchIcon from '../svg/search.svg'

// Dropdown
// const items = [
//     {
//       id: 1,
//       value: 'Pulp Fiction',
//     },
//     {
//       id: 2,
//       value: 'The Prestige',
//     },
//     {
//       id: 3,
//       value: 'Blade Runner 2049',
//     },
//   ];


export function Home() {
    const [booksResult, setBooksResult] = useState([])
    const [query, setQuery] = useState('')
    const [value, setValue] = useState(["dentro do array do value"])

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
            {/* Dropdown */}
            {/* <FavoriteMenu title="Select movie" items={items} multiSelect /> */}

            <BookContext.Provider value={[value, setValue]}>
                <FavoriteNavbar />
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
            </BookContext.Provider>
        </>
    )
}



// botar um onClick no butao pra acionar uma funcao para mudar o estado do value