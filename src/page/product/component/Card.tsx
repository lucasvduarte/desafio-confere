import styled from "styled-components";


export const Container = styled.div`    
    height: 65px;
    padding-bottom: 30px;
`;

export const Sizes = styled.div`   
    font-size: 10px;
    font-weight: 600;
    background-color: #d8d8d8; 
    color: #686868;
    border-radius: 2px;
    padding-left: 2px;
    padding-right: 2px;
    min-width: 10px;
    text-align: center;
    margin-left: 3px;
    margin-bottom: 3px;
    cursor: pointer;
`;

export const BodyStyled = styled.div`   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px;
`;

export const ContainerCard = styled.div`   
    display: flex; 
    flex-direction:  column ;
    margin-bottom: 30px;
    width: 216px;
    gap: 3px;
    align-items: center;
`;

export const ContainerSize = styled.div`   
    margin-top: -2px;
    display: flex; 
    flex-direction: row ;
    justify-content: center;
`;