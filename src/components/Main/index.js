import{useState, useEffect} from 'react'
import axios from 'axios'

import { Container, Wrapper, Content } from './styles'

import FavoriteMenu from '../FavoriteMenu' 
import { FavoriteNavbar } from '../FavoriteNavbar'
import { BookItem } from '../BookItem'
import { SearchBar } from '../SearchBar'

import { BookContext } from '../../contexts/BookContext'

import searchIcon from '../../svg/search.svg'

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


export function Main() {
    const [booksResult, setBooksResult] = useState([])
    const [query, setQuery] = useState('')
    // const [value, setValue] = useState(["dentro do array do value"])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAOHS8GCE_3nLfRN3bgaILhlyB0j3YxB9k`
          )
          .then(res => setBooksResult(res.data.items))
        }
      }

    console.log(booksResult)
    console.log(query)
    return (
        <Container>
            <Wrapper>
                {/* <BookContext.Provider value={[value, setValue]}> */}
                    {/* <FavoriteNavbar /> */}

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

                    <Content>
                        {/* Display list of books found */}
                        {booksResult.map(book => {
                            return <BookItem key={book.id} book={book} />
                        })}
                    </Content>
                {/* </BookContext.Provider> */}
            </Wrapper>
        </Container>
    )
}


