import styled from 'styled-components';


export const ShopsButton = styled.button<{secondColor: string}>`
border: 2px solid black;
border-radius: 5px;
background-color: ${({ secondColor }) => secondColor};
color: white;
position: absolute;
left: 270px;
top: 280px;
padding: 8px 30px;
font-family: "Gilroy medium", sans-serif;
font-size: 14px;
font-weight: bold;
cursor: pointer;`;
