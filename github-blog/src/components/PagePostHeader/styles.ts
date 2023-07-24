import { styled } from "styled-components";

export const PostPageHeaderInfoContainer = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
`;

export const PostPageHeaderInfoSpanItem = styled.span`
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

export const PostPageHeaderMainContainer = styled.section`
    width: 54rem;
    height: 13.25rem;
    margin: 0 auto;
    background: ${props=> props.theme['base-profile']};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    align-items: flex-start;
    margin-top: -6rem;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20); 
`;

export const PostPageNavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    a {
        display: flex;
        flex-wrap: nowrap;
        color: ${props=> props.theme['brand-blue']};
        text-transform: uppercase;
        font-size: 0.875rem;
        display: flex;
        gap: 0.7rem;
        cursor: pointer;
    }
`;