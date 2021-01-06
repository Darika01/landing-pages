import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const StyledNav = styled.nav`
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.commonColor.primaryNormal};
    height: 8.4rem;
    & > div {
        max-width: 124rem;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
`;

export const StyledList = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledLink = styled(NavLink)`
    padding: 3.4rem 2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.commonColor.white};
    transition: box-shadow 0.2s;
    &.active {
        color: ${({ theme }) => theme.commonColor.secondaryNormal};
        pointer-events: none;
        font-weight: 500;
    }
    &:hover:not(.active) {
        box-shadow: inset 0 -0.4rem 0 ${({ theme }) => theme.calcColor(theme.commonColor.secondaryNormal, 0.6)};
    }
`;
export const LogoImg = styled.img`
    width: 18.4rem;
    height: 5.2rem;
`;
