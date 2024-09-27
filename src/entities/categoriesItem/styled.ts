import styled from 'styled-components';


export const ItemWrapper = styled.a<{secondColor: string; id: string; selectedCategory: unknown}>`
display: flex;
gap: 0 6px;
font-size: 12px;
font-weight: 600;
font-family: "Gilroy", sans-serif;
color: gray;
align-items: center;
cursor: pointer;
border-bottom: ${({ id, selectedCategory, secondColor }) => (id === selectedCategory ? `2px solid ${secondColor}` : '2px solid rgba(0, 0, 0, 0)')};
padding-bottom: 8px;
text-decoration: none;    
&:hover {
    border-bottom: ${({ secondColor }) => `2px solid ${secondColor}`};
}`;
