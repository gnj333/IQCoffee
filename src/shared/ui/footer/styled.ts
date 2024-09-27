import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
    gap:40px 0;
background-color: black;
    background-image: url("/assets/images/Rectangle.png");
padding: 0 58px 0 58px;
border-top-right-radius: 15px;
border-top-left-radius: 15px;;
margin-top: 20px;
position: fixed;
    width: 376px;
bottom: 0;`;

export const Element = styled.div`
display: flex;
flex-direction: column;     
color: white;
font-size: 12px;
font-weight: 500;
font-family: "Gilroy medium", sans-serif;
align-items: center;
padding-top:12px;
padding-bottom: 5px;
position: relative;`;

export const Img = styled.img`
width: 24px;
height: 24px;`;

export const OpenIcon = styled.img`
width: 24px;
height: 20px;
    position: absolute;
    right: -10px;
    bottom: 30px
`;
