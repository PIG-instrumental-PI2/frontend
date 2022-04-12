import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PigstyLogo from "../../assets/img/PigstyLogo.png";
import InspectionIcon from "../../assets/icons/InspectionIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <NavWrapper>
        <Logo src={PigstyLogo} alt="Pigsty Logo" />
        <ul>
          <li>
            <ButtonStyled onClick={() => navigate("/")}>
              <img src={InspectionIcon} alt="Inspection Icon" />
              Inspeções
            </ButtonStyled>
          </li>
        </ul>
      </NavWrapper>
      <Line />
    </nav>
  );
}

const Line = styled.hr`
  margin: 0 18px;
  border: none;
  border-top: 4px solid var(--color-grey-dark);
`;

const Logo = styled.img`
  height: 66px;
  margin-right: 100px;
  margin-left: 24px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
`;

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 18px;
  color: var(--color-grey-dark);
  cursor: pointer;

  & img {
    height: 24px;
    margin-bottom: 4px;
  }
`;

export default Navbar;
