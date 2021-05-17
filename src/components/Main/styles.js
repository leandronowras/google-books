import styled from 'styled-components'

export const Container = styled.div`
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1080px;
    display: flex;
  flex-direction: column;
  justify-content: center;
`

export const QueryParams = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`

// É div?????
export const MaxResults = styled.div`
  input {
    border: 2px solid rgba(255, 255, 255);
    border-radius: 40px;
    padding: 10px 5px;
  }
`

export const Index = styled.div`
margin-left: 10rem;
input {
    border: 2px solid rgba(255, 255, 255);
    border-radius: 40px;
    padding: 10px 5px;
  }
`
