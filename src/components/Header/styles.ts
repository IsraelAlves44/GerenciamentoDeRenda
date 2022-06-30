import styled from "styled-components"

export const Container  = styled.header `
    background: var(--blue);
    padding: 2rem;
`

export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;
    
    padding: 0 1rem 10rem;
    display: flex;
    justify-content: flex-end;
    

    button { 
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }
`