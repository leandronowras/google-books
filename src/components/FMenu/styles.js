import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 1rem;

    max-width: 300px;

    @media (max-width: 668px) {
    display: none;
  }
`

export const Header = styled.div`
    margin-left: 4rem;
    padding: 1rem;
`

export const Body = styled.div`
    li {
        padding: 1rem;
        margin-bottom: 1rem;
        list-style-type: none;
    }
`
