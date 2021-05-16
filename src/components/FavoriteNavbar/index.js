import {useContext} from 'react'

import { BookContext } from '../../contexts/BookContext'

import { Nav } from './styles'

import { RightNavbar } from '../RightNavbar'
import { BookItem } from '../BookItem'

export function FavoriteNavbar () {
  const msg = useContext(BookContext)

    return (
      <Nav>
        <div className="logo">
          Nav Bar
        </div>
        <div>
          {msg}
        </div>
        {/* <BookItem /> */}
        <RightNavbar />
      </Nav>
    )
  }
