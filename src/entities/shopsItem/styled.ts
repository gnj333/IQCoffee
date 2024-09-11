import styled from 'styled-components';


export const cardWrapper = styled.div<{mainColor: string; pattern: string; opacity: string}>`
width: 100%;
    display: flex;
border-left: 0;
border-right: 2px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-bottom-right-radius: 10px;
margin-bottom: 12px;
    position: relative;
    background-color: ${({ mainColor }) => mainColor};
&::before {
    content: '';
    
    background-image: ${({ pattern }) => `url(/assets/images/${pattern}.svg)`}, url("/assets/images/Rectangle.png");
    opacity: ${({ opacity }) => opacity};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
}`;

export const titlesWrapper = styled.div`
display: flex;
flex-direction: column;
width: 85%;
background-color: white;
border-bottom-right-radius: 10px;
border-right: 2px solid black;`;

export const cardTitle = styled.h1`
font-weight: 800;
font-size: 18px;
padding: 14px 0 16px 20px;
font-family: "Comfortaa", sans-serif;`;

export const cardSubTitle = styled.h2`
color: gray;
font-family: "Gilroy medium", sans-serif;
padding: 0 0 12px 20px;`;

export const arrow = styled.img`
position: absolute;
width: 24px;
height: 24px;
left:334px;
top: 15px`;
