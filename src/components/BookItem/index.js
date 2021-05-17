import {useContext} from 'react'

import { BookContext } from '../../contexts/BookContext'

import {Container, BookThumbnail, Info, Title, Description, PublishedDate, Row, ViewMore, FavoriteButton} from './styles'

export function BookItem(props) {
  const [value, setValue] = useContext(BookContext)

    function addToFavorites(newBook) {
            setValue([...value, newBook])
        }
        
    return (
        <Container>
            <BookThumbnail>
                <img src={
                 props.book ?  
                        props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : "https://www.w3schools.com/images/lamp.jpg"
                    : "not found"
                } alt="Book Thumbnail" />
            </BookThumbnail>

            <Info>
                <Title><span>Title:  </span>{props.book.volumeInfo.title}</Title>
                <Description><span>Description:  </span>
                    {   
                        props.book.searchInfo ?  
                        props.book.searchInfo.textSnippet.replace(/<\/?[^>]+(>|$)/g, "") : "Description not available"
                    }
                </Description>
                <PublishedDate>
                    <span>Published at:  </span>{props.book.volumeInfo.publishedDate}
                </PublishedDate>
                <br/>

                <Row>
                    <ViewMore href={props.book.volumeInfo.infoLink}>View book</ViewMore>

                    <FavoriteButton 
                        type="button" 
                        value=
                        {
                            [
                                props.book.volumeInfo.title,
                                props.book.volumeInfo.publishedDate
                            ]
                        }
                        // onClick={(e) => addToFavorites(e, "value")}
                        onClick={(e) => addToFavorites(props.book.volumeInfo.title, "value")}
                    >
                        Add to favorites
                    </FavoriteButton>
                </Row>
            </Info>
        </Container>
    )
}