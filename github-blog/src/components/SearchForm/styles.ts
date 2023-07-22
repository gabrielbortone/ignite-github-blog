import { styled } from "styled-components";

export const SearchFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 52rem;
    margin: 0 auto;
    margin-top: 3rem;
    gap: 0.5rem;
`;

export const SearchFormHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
        font-size: 1.125rem;
        color: ${props=> props.theme['base-subtitle']};
    }
    span{
        font-size: 0.875rem;
        color: ${props=> props.theme['base-span']};
    }
`;

export const SearchFormInput = styled.input`
    font-size: 1rem;
    line-height: 2;
    background: ${props=>props.theme['base-input']};
    color: ${props=> props.theme['base-label']};
    border-color: ${props=> props.theme['base-border']};
    width: 100%;
    padding: 0.3rem 0.4rem;
`;