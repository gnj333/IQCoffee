import styled from 'styled-components';


export const Icon = styled.img<{color: string}>`
`;

export const IconWrapper = styled.div<{ color: string }>`
    color: ${({ color }) => color};`;
