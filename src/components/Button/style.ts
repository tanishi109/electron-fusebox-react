import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  appearance: none;
  cursor: pointer;
  color: tomato;
  background-color: papayawhip;

  &:disabled {
    cursor: default;
  }
`;
