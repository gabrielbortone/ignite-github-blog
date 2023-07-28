import { styled } from "styled-components";

export const ProfileContainer = styled.section`
    width: 54rem;
    height: 13.25rem;
    margin: 0 auto;
    background: ${props=> props.theme['base-profile']};
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 1.5rem;
    align-items: flex-start;
    margin-top: -6rem;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20); 
    z-index: 1000;

    @media (max-width:1024px){
        width: 100%;
        height: 15rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        position: absolute;

    }
`;

export const ProfileImageContainer = styled.div`
    width: 148px;
    height: 148px;
    flex-shrink: 0; 
    border-radius: 8px; 
    background: white;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const ProfileTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ProfileLinkToGithub = styled.a`
    color: ${props=> props.theme['brand-blue']};
    display: flex;
    font-size: 12px;
    font-weight: 700;
    gap: 0.5rem;
    cursor: pointer;
    img {
        height: 12px;
    }
`;

export const ProfileInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProfileInfoSpanItem = styled.span`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    p{
        font-family: Nunito;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        color: ${props=> props.theme['base-subtitle']};
    }
    img{
        height: 1.1rem;
        width: 1.1rem;
    }
`;