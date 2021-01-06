//@flow
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { TextBody1 } from 'shared/styledComponents';
import face1 from 'assets/images/justDoIt/face1.png';
import face2 from 'assets/images/justDoIt/face2.png';
import CenteredContainer from '../shared/CenteredContainer/CenteredContainer';
import { Content, Container, Title, LikeIcon, DateText, FaceContainer, FaceImg, TextName } from './styles';

export default function FirstSection() {
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
