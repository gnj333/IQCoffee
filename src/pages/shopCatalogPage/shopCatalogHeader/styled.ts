import styled from 'styled-components';


export const Wrapper = styled.div<{mainColor: string; pattern: string; opacity: string}>`
 display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ mainColor }) => mainColor || 'black'};
    position: sticky;
    z-index: 1;
    top: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    &::before {
        content: '';
        background-image: ${({ pattern }) => `url(/assets/images/${pattern}.svg)` || ''}, url("/assets/images/Rectangle.png");
        opacity: ${({ opacity }) => opacity || ''};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 800;
    font-family: "Gilroy", sans-serif;
    color: white;
    padding-left: 20px`;

export const ImgWrapper = styled.div`
    width: 56px;
    height: 54px;
    background-color: white;
    border: 2px solid black;
    margin: 0 12px 14px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;`;

export const Img = styled.img`
    width: 32px;
    height: 32px;`;
