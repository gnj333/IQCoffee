import styled from 'styled-components';


export const CardWrapper = styled.div<{mainColor: string; pattern: string; opacity: string; secondColor: string; open: boolean}>`
    height: 100%;
    margin-bottom: ${({ open }) => (open ? '20px' : '')};
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-bottom-right-radius: 10px;
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

export const TitlesWrapper = styled.div<{open: boolean}>`
display: flex;
flex-direction: column;
width: 85%;
background-color: white;
border-bottom-right-radius: 10px;
border-right: 2px solid black;
    border-bottom: ${({ open }) => (open ? '2px solid black' : '')};`;

export const CardTitle = styled.h1`
font-weight: 800;
font-size: 18px;
padding: 14px 0 16px 20px;
font-family: "Comfortaa", sans-serif;`;

export const CardSubTitle = styled.h2`
color: gray;
font-family: "Gilroy medium", sans-serif;
padding: 0 0 12px 20px;`;

export const Arrow = styled.img<{open: boolean}>`
position: absolute;
width: 24px;
height: 24px;
left:334px;
top: 15px;
cursor: pointer;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : '')};`;


export const OpenCardWrapper = styled.div<{pattern: string; opacity: string; isOpen: boolean}>`
    display: flex;
    padding: 0 20px 0 20px;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    position: relative;
    transition: 0.3s ease-in-out;`;

export const OpenShopCard = styled.div`
    margin-top: 20px;
    background-color: white;
    border-radius: 10px;
    gap: 20px 0;
    padding: 20px 20px 12px 20px;
    border: 2px solid black;`;


export const ItemsWrapper = styled.div`
    display: flex;
    border-bottom: 2px solid #959595;
    padding: 0 0 12px 0`;

export const ShopCardItem = styled.div`
display: flex;
flex-direction: column;
padding-right: 20px;`;

export const ShopCardIcons = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding-bottom: 6px`;

export const ShopCardTitle = styled.h1`
font-weight: 800;
font-size: 9px;
`;

export const NewMenu = styled.div`
display: flex;
flex-direction: column;`;

export const NewMenuIcon = styled.img`
width: 24px;
height: 24px;`;

export const NewMenuButton = styled.button<{secondColor: string}>`
padding: 3px 2px;
border: none;
color: white;
background-color: ${({ secondColor }) => secondColor};
border-radius: 2px;
font-size: 9px;
font-weight: 800;
font-family: "Gilroy medium", sans-serif;
margin-top: 2px`;

export const WorkTimeWrapper = styled.div`
display: flex;
padding-top: 12px;
align-items: center;`;

export const Days = styled.div`
font-size: 10px;
font-family: "Gilroy medium", sans-serif;
font-weight: 800;
padding-right: 12px;`;

export const Line = styled.img`
background-color: black;
    width: 1px;
    height: 14px;
`;

export const WorkTime = styled.div`
    font-size: 10px;
    font-family: "Gilroy medium", sans-serif;
    font-weight: 800;
    padding-left: 12px;`;

export const PhotosBlock = styled.div`
padding: 20px 0 30px 0`;

export const PhotosTitle = styled.h1`
font-family: "Gilroy medium", sans-serif;
font-weight: 800;
font-size: 12px;
color: white;
line-height: 16px`;

export const PhotosWrapper = styled.div`
display: flex;
gap: 0 8px;
padding-top: 6px`;

export const Photo = styled.img`
width: 55px;
height: 53px;
border: 2px solid black`;
