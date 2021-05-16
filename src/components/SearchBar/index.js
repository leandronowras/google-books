import styled from 'styled-components'

export const SearchBar = styled.div`
    height: 48px;
    width: 700px;
    position: relative;
    margin: 0 24px;

    input {
        background: #FFF;
        height: 48px;
        width: 700px;
        padding: 0 64px;
        border-radius: 100px;
        border: none;
        font-size: 14px;
        outline: none;
        color: var(--primary);

        &::placeholder {
            color: var(--gray);
        }
    }

    img {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        z-index: 10;
        width: 16px;
        height: 16px;
    }
`