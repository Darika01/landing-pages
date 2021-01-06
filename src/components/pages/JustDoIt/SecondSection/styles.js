//@flow
import styled from 'styled-components/macro';
import { TitleH2, TextBody2 } from 'shared/styledComponents';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    height: 60rem;
    position: relative;
    z-index: 5;

    background-color: ${props => props.theme.secondary};
`;
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
`;
export const Title = styled(TitleH2)`
    color: ${props => props.theme.commonColor.white};
    margin-bottom: 2rem;
`;
export const SubTitle = styled(TextBody2)`
    color: ${props => props.theme.commonColor.white};
`;
export const BgrImg = styled.div`
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
