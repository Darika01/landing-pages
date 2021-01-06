//@flow
import styled from 'styled-components/macro';
import { BalanceScaleRight } from '@styled-icons/fa-solid';
import { TitleH1 } from 'shared/styledComponents';
import setIconSize from 'utils/themeConfig/setIconSize';

export const Content = styled.div`
    background-size: 100% 100%;
    position: relative;
    background-color: ${props => props.theme.commonColor.black};
    overflow: hidden;
    height: 100vh;
`;

export const IconContainer = styled.div`
    display: flex;
    background-color: #0d161e;
    align-items: center;
    justify-content: center;
`;
export const TopIcon = styled(BalanceScaleRight)`
    color: ${props => props.theme.commonColor.white};
    margin: 3rem 0;
    ${setIconSize(8)}
    z-index: 2;
    transition: all 0.2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin-top: -12rem;
`;
export const Title = styled(TitleH1)`
    color: ${props => props.theme.commonColor.white};
    z-index: 2;
`;
