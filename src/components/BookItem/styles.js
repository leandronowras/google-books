import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-bottom: 2rem;
    padding: 1.5rem;
    align-items: center;

    width: min(1080px, 100%);
`

export const BookThumbnail = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  height: 230px;
  > img {
    height: 73%;
  }
`

export const Info = styled.div`
    padding: 1rem;
    margin-left: 1rem;
    width: 100%;

    span {
        color: var(--gray);
    }
`

export const Title = styled.h3`

`


export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`

export const PublishedDate = styled.span`

`
export const Row = styled.div`
    display: flex;

    justify-content: space-between;
`

export const ViewMore = styled.a`
    display: inline;
   margin-top: 0.5rem; 
   padding: 12px 6px;

    font-family: "Roboto", sans-serif;
   font-size: 1rem;
   font-weight: bold;
   background: #1E90FF;
   width: 160px;
   text-align: center;
   text-decoration: none;
   color: #fff;
   border-radius: 10px;
   cursor: pointer;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;

   &:hover{
       box-shadow: 0 0 20px rgba(73, 144, 255, 1);
   }
`

export const FavoriteButton = styled.button`
display: inline;
   margin-top: 0.5rem; 
   padding: 6px;

   font-size: 1rem;
   font-weight: bold;
   background: #FF41B2;
   width: 160px;
   text-align: center;
   text-decoration: none;
   color: #fff;
   border-radius: 10px;
   cursor: pointer;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;

   &:hover{
       box-shadow: 0 0 20px rgba(255, 125, 255, 1);
   }
`