import styled from "styled-components";

interface CardInterface {
    margin?: string;
}

export const Image = styled.img`  
    margin: ${(props: CardInterface) => `${props.margin || '0px'}`};
`;

export const Promo = styled.div`   
    position: absolute; 
    top: 14px; 
    right: 30px; 
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-45deg);
`;