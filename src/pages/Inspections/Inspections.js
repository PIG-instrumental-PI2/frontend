import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import InpsectionTable from "../../components/InpsectionTable/InpectionTable";
import { getInspections } from "../../services/inspections";

function Inspections() {
  const navigate = useNavigate();
  const [inspections, setInspections] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getInspectionList() {
      try {
        setIsLoading(true);
        const { data } = await getInspections();
        setInspections(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getInspectionList();
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <Heading>Inspeções</Heading>
        <Button onClick={() => navigate("/create")}>Criar Inspeção</Button>
      </TitleWrapper>
      {isLoading && <p>Loading...</p>}
      {inspections && (
        <InpsectionTable
          inspections={inspections}
          goToGroup={(id) => navigate(`/groups/${id}`)}
          goToGraphs={(id) => navigate(`/graphs/${id}`)}
        />
      )}
    </Container>
  );
}

const Heading = styled.h1`
  font-weight: 500;
  font-size: 72px;
`;

const Container = styled.div`
  width: 80vw;
  max-width: 920px;
  min-width: 260px;
  margin: auto;
  margin-top: 2em;

  @media screen and (max-width: 920px) {
    ${Heading} {
      font-size: 48px;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3em;

  @media screen and (max-width: 720px) {
    flex-direction: column;

    ${Heading} {
      margin-bottom: 0.5em;
    }
  }
`;

export default Inspections;
