import styled from "styled-components";
import LeftArrow from "../../assets/icons/LeftArrow.png";

const Button = styled.button`
  border-radius: 4px;
  border: none;
  background-color: var(--color-grey-darker);
  font-size: 18px;
  font-weight: bold;
  color: var(--color-background);
  text-transform: uppercase;
  padding: 12px;
  min-width: 300px;
  height: 46px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const SmallButton = styled.button`
  text-transform: uppercase;
  color: var(--color-background);
  background-color: var(--color-grey-dark);
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const ReturnButton = ({ onClick }) => {
  return (
    <ReturnButtonStyle onClick={onClick}>
      <img style={{ height: 20 }} src={LeftArrow} alt="Left Arrow" />
      voltar
    </ReturnButtonStyle>
  );
};

const ReturnButtonStyle = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  font-size: 18px;
  text-transform: uppercase;
  color: var(--color-grey-dark);
  gap: 1em;
  font-weight: 500;
  cursor: pointer;
`;

export default Button;
