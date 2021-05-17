import {useContext} from 'react'

import { BookContext } from '../../contexts/BookContext'

import {BookList} from './styles'

export function RightNavbar ({ open }) {
    const favoriteBooks = useContext(BookContext)

    return (
        <BookList open={open}>
            <li>book 1</li>
            <li>book 2</li>
            <li>book 3</li>
            <li>book 4</li>

            {favoriteBooks.map(book => {
                return <p>{book}</p>
            })}
        </BookList>
    )
}