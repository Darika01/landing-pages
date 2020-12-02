//@flow
import React from 'react';
import styled from 'styled-components';
import headerImg from 'assets/images/justDoIt/header.jpg';
import { BalanceScaleRight } from '@styled-icons/fa-solid';
import { FullHeightHeaderImg, TitleH1 } from 'shared/styledComponents';
import setIconSize from 'utils/themeConfig/setIconSize';

const Content = styled.div`
    background-size: 100% 100%;
    position: relative;
    background-color: ${props => props.theme.common.blackColor};
    overflow: hidden;
    height: 100vh;
`;

const IconContainer = styled.div`
    display: flex;
    background-color: #0d161e;
    align-items: center;
    justify-content: center;
`;
const TopIcon = styled(BalanceScaleRight)`
    color: ${props => props.theme.common.whiteColor};
    margin: 3rem 0;
    ${setIconSize(8)}
    z-index: 2;
    transition: all 0.2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin-top: -12rem;
`;
const Title = styled(TitleH1)`
    color: ${props => props.theme.common.whiteColor};
    z-index: 2;
`;

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
