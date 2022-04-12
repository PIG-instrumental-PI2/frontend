import { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../../components/Button/Button";
import Input, { Select } from "../../components/Input/Input";
import LogoWithName from "../../assets/img/LogoWithName.png";
import { getPigList } from "../../services/pig";
import { createInspection } from "../../services/inspections";
import { useNavigate } from "react-router-dom";

function CreateInspection() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [pigList, setPigList] = useState(null);
  const [selectedPig, setSelectedPig] = useState("default");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function setupPigList() {
      try {
        const response = await getPigList();
        setPigList(response.data.pigs);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    setupPigList();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  async function handleSubmit() {
    try {
      await createInspection({
        name,
        place,
        pig_number: selectedPig,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Logo src={LogoWithName} alt="Pigsty Logo" />
      <Heading>Criar Inspeção</Heading>
      <Input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Local"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <Select
        value={selectedPig}
        onChange={(e) => setSelectedPig(e.target.value)}
      >
        <option disabled value="default">
          Número de Série do PIG
        </option>
        {pigList &&
          pigList.map(({ pig_number }) => (
            <option key={pig_number} value={pig_number}>
              {pig_number}
            </option>
          ))}
      </Select>
      <Button onClick={handleSubmit}>CRIAR</Button>
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
