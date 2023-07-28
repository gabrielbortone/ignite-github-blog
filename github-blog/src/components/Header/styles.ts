import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props=> props.theme['base-profile']};
    display: flex;
    width: 100%;
    height: 18.5rem;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderContainerItem = styled.div`
    width: 23.125rem;
    height: 14.75rem;
    img{
        max-width: 100%;
        max-height: 100%;
        margin-top: 2rem;
    }
    @media (max-width:1024px){
        max-width: 12rem;
        max-height: 8rem;
        position: relative;

        img {
            margin-top: 0;
        }
    }
`;

export const LogoPrincipalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    gap: 0.7rem;
    p{
        color: ${props=> props.theme['brand-blue']};
        font-family: Coda;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }
    img {
        margin-top: -0.8rem;
        max-width: 2.8125rem;
        max-height: 3.5rem; 
    }
`;