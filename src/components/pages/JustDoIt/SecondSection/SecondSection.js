//@flow
import React, { useEffect } from 'react';
import axios from 'axios';
import API from 'api';
import { Content, Container, BgrImg, Title, SubTitle, TitleContainer } from './styles';
import bgrImg from 'assets/images/justDoIt/bgr.jpg';
import withErrorHandler from 'shared/withErrorHandler/withErrorHandler';

const SecondSection = () => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getData = () => {
        API.get('list.json', {
            cancelToken: source.token
        }).then(res => {
            console.log(res.data);
        });
    };

    useEffect(() => {
        getData();
        return () => source.cancel('Operation canceled by the user.');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Content>
            <Container>
                <BgrImg bgrImg={bgrImg} alt="bgr" />
                <TitleContainer>
                    <Title>Occaecat elit quis quis</Title>
                    <SubTitle>Ipsum adipisicing deserunt fugiat commodo Lorem esse esse</SubTitle>
                </TitleContainer>
            </Container>
        </Content>
    );
};
export default withErrorHandler(SecondSection, API);
