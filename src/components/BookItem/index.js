import {Container, BookThumbnail, Info, Title, Subtitle, Description, PublishedDate} from './styles'

export function BookItem(props) {
    return (
        <Container>
            <BookThumbnail>
                <img src={
                props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.thumbnail : "https://www.w3schools.com/images/lamp.jpg"
                } alt="Book Thumbnail" />
            </BookThumbnail>

            <Info>
                <Title><span>title - </span>{props.book.volumeInfo.title}</Title>
                <Description><span>description - </span>
                    {   
                        props.book.searchInfo ?  
                        props.book.searchInfo.textSnippet.replace(/<\/?[^>]+(>|$)/g, "") : "Description not available"
                    }
                </Description>
                <PublishedDate><span>Published at - </span>{props.book.volumeInfo.publishedDate}</PublishedDate>
            </Info>
        </Container>
    )
}