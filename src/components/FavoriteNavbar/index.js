import {useContext} from 'react'

import { BookContext } from '../../contexts/BookContext'

import { Nav } from './styles'

import { RightNavbar } from '../RightNavbar'
import { BookListItem } from '../BookListItem'

export function FavoriteNavbar () {
  const msg = useContext(BookContext)

    return (
      <Nav>
        <div className="logo">
          Nav Bar
        </div>

        <BookListItem />
      </Nav>
    )
  }
