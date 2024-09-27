import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    background-color: black;
    background-image: url("/assets/images/Rectangle.png");
    border-radius: 10px;
    border: 2px solid black;
    flex-direction: column;
    cursor: pointer`;

export const Card = styled.div`
display: flex;
border-radius: 10px;
border: none;
background-color: white;
align-items: center;
padding: 5px 0;
min-height: 37px;
justify-content: center`;

export const CardTitle = styled.div`
font-size: 12px;
font-weight: 800;
font-family: 'Gilroy', sans-serif;
padding: 0 10px 0 10px;
`;

export const CostWrapper = styled.div`
text-align: end;
color: white;
font-size: 10px;
font-family: 'Gilroy', sans-serif;
font-weight: 600;
padding: 4px 10px`;
