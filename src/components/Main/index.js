import{ useState } from 'react'
import axios from 'axios'

import { Container, Wrapper, Content, QueryParams, MaxResults, Index } from './styles'

import { BookItem } from '../BookItem'
import { SearchBar } from '../SearchBar'
import searchIcon from '../../svg/search.svg'

export function Main() {
    const [maxResults, setMaxResults] = useState(10);
    const [startIndex, setStartIndex] = useState(1);
    const [booksResult, setBooksResult] = useState([])
    const [query, setQuery] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&key=AIzaSyAOHS8GCE_3nLfRN3bgaILhlyB0j3YxB9k`
          )
          .then(res => setBooksResult(res.data.items))
        }
      }

    return (
        <Container>
            <Wrapper>
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

                    <QueryParams>
                        <MaxResults>
                            <span>Max results: </span>
                            <label for='maxResults'></label>
                            <input
                                type='number'
                                id='maxResults'
                                placeholder='           Max Results'
                                value={maxResults}
                                onChange={e => setMaxResults(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </MaxResults>

                        <Index>
                            <span>Start from index: </span>
                            <label for='startIndex'></label>
                            <input
                                type='number'
                                id='startIndex'
                                placeholder='            Start Index'
                                value={startIndex}
                                onChange={e => setStartIndex(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </Index>
                    </QueryParams>

                    <Content>
                        {/* Display list of books found */}
                        {booksResult.map(book => {
                            return <BookItem key={book.id} book={book} />
                        })}
                    </Content>
            </Wrapper>
        </Container>
    )
}


