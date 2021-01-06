//@flow
import React from 'react';
import linksList from '../linksList';
import { StyledNav, StyledList, StyledLink, LogoImg } from './styles';
import Logo from 'assets/logo/logo3_200x200.png';

export default function HorizontalNavbar() {
    return (
        <StyledNav>
            <div>
                <LogoImg src={Logo} alt="logo" />
                <StyledList>
                    {linksList.map(el => {
                        return (
                            <StyledLink key={el.title} exact activeClassName="active" to={el.linkTo}>
                                {el.title}
                            </StyledLink>
                        );
                    })}
                </StyledList>
            </div>
        </StyledNav>
    );
}
