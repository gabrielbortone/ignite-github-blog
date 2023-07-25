import { styled } from "styled-components";

export const PagePostContentContainer = styled.section`
    width: 54rem;
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;

`;

export const PagePostContentParagraph = styled.p`
    max-width: 100%;
    color: ${props=> props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.6;
    font-family: Nunito, sans-serif;
`;