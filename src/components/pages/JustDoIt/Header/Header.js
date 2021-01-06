//@flow
import React from 'react';
import headerImg from 'assets/images/justDoIt/header.jpg';
import { FullHeightHeaderImg } from 'shared/styledComponents';
import { Content, IconContainer, TopIcon, TitleContainer, Title } from './styles';

export default function Header() {
    return (
        <Content>
            <IconContainer>
                <TopIcon />
            </IconContainer>
            <TitleContainer>
                <Title>You can do anything, {<br />}but not everything</Title>
            </TitleContainer>
            <FullHeightHeaderImg src={headerImg} alt="headerImg" />
        </Content>
    );
}
