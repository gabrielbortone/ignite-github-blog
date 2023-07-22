import { styled } from "styled-components";

export const PostsContainer = styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(25rem, 1fr) minmax(25rem, 1fr);
    align-items: center;
    margin: 3rem auto;
    max-width: 52rem;
`;