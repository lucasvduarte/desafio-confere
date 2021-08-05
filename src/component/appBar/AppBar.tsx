import styled from "styled-components";

export const Appbar = styled.div`   
    top: 0px;
    position: fixed; 
    display: flex;
    height: 80px;
    background-color: #2600d1;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    z-index: 2;
    gap: 80px;
    transition: 0.2s ease-in;
    @media (max-width: 750px) {
        gap: 60px;
        transition: 0.2s ease-in;
    }

    @media (max-width: 480px) {
        gap: 40px;
        margin-right: 30px;
        transition: 0.2s ease-in;
    }
`;

export const CartSize = styled.div`   
    position: absolute; 
    top: -20px; 
    right: -18px; 
    width: 25px;
    height: 25px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: #e100ff;
`;

export const CartTitle = styled.div`   
    position: relative;
    margin-right: 100px; 
    transition: 0.2s ease-in;
    @media (max-width: 800px) {
        margin-right: 80px;
        transition: 0.2s ease-in;
    }
    @media (max-width: 650px) {
        margin-right: 60px;
        transition: 0.2s ease-in;
    }

    @media (max-width: 480px) {
        margin-right: 30px;
        transition: 0.2s ease-in;
    }
`;