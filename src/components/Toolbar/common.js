import styled from "styled-components";

export const ToolbarItem = styled.div`
  width: 28px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 16px;
  font-family: Oxygen, sans-serif;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  margin-right: 3px;

  ${props =>
    props.isActive &&
    `    
    color: white;
    background-color: #236798;
    box-shadow: none;
    border: 1px solid #1D557D;
    box-sizing: border-box`}

`;

export const Container = styled.div`
  display: flex;
  margin-right: 7px;
`;