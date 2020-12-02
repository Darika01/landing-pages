//@flow
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { TitleH2, TextH3, TextBody1, TextBody2, Layout } from 'shared/styledComponents';
import { HappyHeartEyes } from '@styled-icons/boxicons-regular';
import setIconSize from 'utils/themeConfig/setIconSize';
import face1 from 'assets/images/justDoIt/face1.png';
import face2 from 'assets/images/justDoIt/face2.png';
import CenteredContainer from '../shared/CenteredContainer/CenteredContainer';

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;
const Container = styled(Layout)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > *:not(:last-child) {
        margin-bottom: 2.4rem;
    }
`;

const LikeIcon = styled(HappyHeartEyes)`
    ${setIconSize(4.6)};
    color: ${props => props.theme.text.primaryColor};
`;
const Title = styled(TitleH2)`
    color: ${props => props.theme.text.primaryColor};
    z-index: 2;
`;

const DateText = styled(TextH3)`
    text-transform: none;
    color: ${props => props.theme.common.whiteColor};
    & > span {
        width: 15rem;
        margin: 0 auto;
        text-align: left;
        display: inline-block;
        padding-left: 1rem;
    }
`;
const FaceContainer = styled.div`
    margin-top: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        flex-direction: column;
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    & > div:first-child {
        margin-right: 2.4rem;
        @media (max-width: ${props => props.theme.breakpoints.md}) {
            margin-right: 0;
            margin-bottom: 8rem;
        }
    }
`;

const FaceImg = styled.img`
    width: 20rem;
    height: auto;
`;

const TextName = styled(TextBody2)`
    text-transform: uppercase;
    font-weight: 500;
    margin: 4rem 0 2.2rem;
`;

export default function SectionFirst() {
    const [Time, setTime] = useState({ date: moment().format('MMMM Do YYYY'), time: moment().format('HH:mm:ss') });

    useEffect(() => {
        let interval = setInterval(
            () =>
                setTime({
                    date: moment().format('MMMM Do YYYY'),
                    time: moment().format('HH:mm:ss')
                }),
            1000
        );
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Content>
            <Container>
                <Title>Non fugiat sint reprehenderit pariatur</Title>
                <LikeIcon />
                <TextBody1>
                    Eu dolore sit in consectetur aute occaecat voluptate minim non tempor fugiat. Nostrud minim proident
                    laborum magna. Ea mollit aute est amet eiusmod. Pariatur dolore qui aliqua laborum magna consequat..
                </TextBody1>
            </Container>
            <CenteredContainer bgrColor={props => props.theme.primaryColor}>
                <DateText>
                    {Time.date}
                    <span>{Time.time}</span>
                </DateText>
            </CenteredContainer>
            <Container>
                <Title>Quis cillum laborum</Title>
                <LikeIcon />
                <FaceContainer>
                    <div>
                        <FaceImg src={face1} />
                        <TextName>Alex</TextName>
                        <TextBody1>
                            &ldquo;Sunt nostrud consequat id duis Lorem occaecat ipsum tempor in deserunt culpa
                            proident.&rdquo;
                        </TextBody1>
                    </div>
                    <div>
                        <FaceImg src={face2} />
                        <TextName>Lora</TextName>
                        <TextBody1>
                            &ldquo;Sunt nostrud consequat id duis Lorem occaecat ipsum tempor in deserunt culpa
                            proident.&rdquo;
                        </TextBody1>
                    </div>
                </FaceContainer>
            </Container>
        </Content>
    );
}
