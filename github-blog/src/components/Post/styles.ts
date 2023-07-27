import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${props=> props.theme['base-title']};
    background: ${props=> props.theme['base-post']};
    border: 2px solid ${props=> props.theme['base-border']};
    flex-direction: column;
    padding: 1.5rem 1rem;
    width: 24.5rem;
    height: 16.25rem;
    align-self: center;
    justify-self: center;
    border-radius: 8px;
`;

export const PostHeaderContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
`;

export const PostHeaderTitulo = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6;
    max-width: 17rem;
`;


export const PostTimeSpan = styled.span`
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${props=> props.theme['base-span']};
`;

export const PostContentContainer = styled.div`
    margin-top: 1.25rem;
    font-size: 1rem;
    line-height: 1.6;
    color: ${props=> props.theme['base-text']};
    display: flex;
    width: 100%;
    text-align: left;

    p{
        display: -webkit-box;
        -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
        -webkit-box-orient: vertical;
        max-height: 8rem;
        overflow: hidden; 
        text-overflow: ellipsis;
        padding: 1rem 1rem;
        margin-bottom: 1rem;
        white-space: wrap;
    }
`;

export const PostContentLink = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
`;