import styled from "styled-components";

interface TextInterface {
    weight?: number;
    fontSize?: number;
    color?: string;
}

export const Text = styled.div`  
    color: ${(props: TextInterface) => `${props.color || '#7A7A7A'}`};;
    font-family: Arial, tahoma, verdana;
    font-size: ${(props: TextInterface) => `${props.fontSize || 12}px`};
    font-style: normal;
    font-weight: ${(props: TextInterface) => `${props.weight || 600}`};
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 4px;
`;