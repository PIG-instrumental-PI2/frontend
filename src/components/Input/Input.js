import styled, { css } from "styled-components";

const InputStyle = css`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid var(--color-grey-darker);
  font-size: 24px;
  color: var(--color-grey-darker);
  min-width: 300px;
  height: 37px;

  ::placeholder {
    color: var(--color-grey-darker);
  }

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  ${InputStyle}
`;

export const Select = styled.select`
  ${InputStyle}
`;

export default Input;
