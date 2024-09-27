import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
    flex-direction: column;
`;

export const CardWrapper = styled.div`
display: flex;
flex-direction: row;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    gap: 0 12px;
    padding-left: 20px`;

export const Title = styled.h2`
font-size: 14px;
font-weight: 800;
font-family: 'Gilroy', sans-serif;
    padding: 12px 0 10px 20px;`;
