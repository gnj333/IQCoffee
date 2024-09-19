import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    background-image: url("/assets/images/Rectangle.png");
    position: sticky;
    z-index: 1;
    top: 0`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 800;
    color: white;
    padding-left: 20px`;

export const ImgWrapper = styled.div`
    width: 54px;
    height: 56px;
    padding: 0 5px 10px 0`;

export const Img = styled.img`
    width: 54px;
    height: 56px;
    padding: 0 5px 10px 0`;
