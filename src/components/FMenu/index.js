import { useState, useContext } from 'react'
import StickyBox from 'react-sticky-box';
import { Container, Header, Body } from './styles'

import {BookContext} from '../../contexts/BookContext'

export function FMenu() {
    const [value, setValue] = useContext(BookContext)

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