import styled from "styled-components";

export const TableLine = styled.tr`
    
`;

export const TableColumn = styled.td<{width?:number}>`
    width: ${props => props.width ?`${props.width}` : 'auto'}
    padding: 10px 0;
`;