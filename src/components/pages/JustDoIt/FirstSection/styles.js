//@flow
import styled from 'styled-components/macro';
import { TitleH2, TextH3, TextBody2, Layout } from 'shared/styledComponents';
import { HappyHeartEyes } from '@styled-icons/boxicons-regular';
import setIconSize from 'utils/themeConfig/setIconSize';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Container = styled(Layout)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > *:not(:last-child) {
        margin-bottom: 2.4rem;
    }
`;

export const LikeIcon = styled(HappyHeartEyes)`
    ${setIconSize(4.6)};
    color: ${props => props.theme.text.primary};
`;
export const Title = styled(TitleH2)`
    color: ${props => props.theme.text.primary};
    z-index: 2;
`;

export const DateText = styled(TextH3)`
    text-transform: none;
    color: ${props => props.theme.commonColor.white};
    & > span {
        width: 15rem;
        margin: 0 auto;
        text-align: left;
        display: inline-flex;
        padding-left: 1rem;
    }
`;

export const FaceContainer = styled.div`
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

export const FaceImg = styled.img`
    width: 20rem;
    height: auto;
`;

export const TextName = styled(TextBody2)`
    text-transform: uppercase;
    font-weight: 500;
    margin: 4rem 0 2.2rem;
`;
