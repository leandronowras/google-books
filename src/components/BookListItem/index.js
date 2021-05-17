import {useState, useContext} from 'react'

import { BookContext } from '../../contexts/BookContext'

import {RightNavbar} from '../RightNavbar'

import { BookLI } from './styles'

export function BookListItem() {
    const msg = useContext(BookContext)
    const [open, setOpen] = useState(false)

    return (
        <>
            <BookLI open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </BookLI>
                {msg}

            <RightNavbar open={open}/>
        </>
    )
}