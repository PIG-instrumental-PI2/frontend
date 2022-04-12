import styled from "styled-components";

import Button from "../../components/Button/Button";
import Input, { Select } from "../../components/Input/Input";
import LogoWithName from "../../assets/img/LogoWithName.png";

function CreateInspection() {
  return (
    <Container>
      <Logo src={LogoWithName} alt="Pigsty Logo" />
      <Heading>Criar Inspeção</Heading>
      <Input placeholder="Nome" />
      <Input placeholder="Local" />
      <Select defaultValue="0">
        <option disabled value="0">
          Número de Série do PIG
        </option>
      </Select>
      <Button>CRIAR</Button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  min-width: 280px;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-height: calc(100vh - 106px);

  padding: 24px 12px;

  & ${Input}, ${Select}, ${Button} {
    width: 100%;
  }

  & ${Input} {
    margin-bottom: 48px;
  }

  & ${Select} {
    margin-bottom: 96px;
  }
`;

const Logo = styled.img`
  width: 158px;
`;

const Heading = styled.h1`
  font-size: 36px;
  margin-top: 100px;
  margin-bottom: 48px;
`;

export default CreateInspection;
