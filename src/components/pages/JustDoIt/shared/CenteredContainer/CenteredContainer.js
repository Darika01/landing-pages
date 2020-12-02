//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoints from 'utils/themeConfig/breakpoints';

type Props = {
    children: React.Node,
    bgrColor: string
};

const Container = styled.div`
    padding: 6.2rem;
    @media (max-width: ${breakpoints.sm}px) {
        padding: 5rem 2rem;
    }
    margin-bottom: 10.6rem;
    background-color: ${props => props.bgrColor};
`;

export default function CenteredContainer({ children, bgrColor }: Props) {
    return <Container bgrColor={bgrColor}>{children}</Container>;
}
