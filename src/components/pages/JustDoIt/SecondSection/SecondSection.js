//@flow
import React from 'react';
import styled from 'styled-components';
import bgrImg from 'assets/images/justDoIt/bgr.jpg';
import { TitleH2, TextBody2 } from 'shared/styledComponents';
import breakpoints from 'utils/themeConfig/breakpoints';

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    height: 60rem;
    position: relative;
    z-index: 5;

    background-color: ${props => props.theme.secondaryColor};
`;
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
`;
const Title = styled(TitleH2)`
    color: ${props => props.theme.common.whiteColor};
    margin-bottom: 2rem;
`;
const SubTitle = styled(TextBody2)`
    color: ${props => props.theme.common.whiteColor};
`;
const BgrImg = styled.div`
    position: absolute;
    z-index: -1;
    background-image: url(${props => props.bgrImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    filter: blur(0.14rem);
`;

export default function SecondSection() {
    return (
        <Content>
            <Container>
                <BgrImg bgrImg={bgrImg} alt="bgr" />
                <TitleContainer>
                    <Title>Occaecat elit quis quis</Title>
                    <SubTitle>Ipsum adipisicing deserunt fugiat commodo Lorem esse esse</SubTitle>
                </TitleContainer>
                {/* <BgrImg src={bgrImg} alt="bgr" /> */}
            </Container>
        </Content>
    );
}
