import { useContext } from 'react'
import StickyBox from 'react-sticky-box';
import { Container, Header, Body } from './styles'

import {BookContext} from '../../contexts/BookContext'

export function FavoriteMenu() {
    const [value] = useContext(BookContext)

    return (
        <Container>
            <StickyBox>
                <Header>
                    <h3>Favorite books</h3>
                </Header>

                <Body>
                    {/* Array of favorite books */}
                    <ul>
                        {value.map(book => {
                            return <li>{book}</li> 
                        })}
                    </ul>
                </Body>
            </StickyBox>
        </Container>
    )
}