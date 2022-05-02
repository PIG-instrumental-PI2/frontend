import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ScatterChart,
  Scatter,
} from "recharts";
import { Heading, Container } from "../../styles/Pages.styled";
import { ReturnButton } from "../../components/Button/Button";
import { getMeasurements } from "../../services/inspections";
import { formatData } from "./utils";

function renderScatterChart(data, yLabel, xLabel = "posicão") {
  return (
    <ScatterChart
      width={1000}
      height={600}
      margin={{ top: 20, right: 20, bottom: 20, left: 50 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" name="posição">
        <Label value={xLabel} position="bottom" />
      </XAxis>
      <YAxis dataKey="y" domain={[]} name="campo magnético">
        <Label value={yLabel} position="left" offset={30} angle={-90} />
      </YAxis>
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter data={data} fill="#8884d8" />
    </ScatterChart>
  );
}

function Groups() {
  const [measurement, setMeasurement] = useState(undefined);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function getInspectionMeasurement() {
      try {
        const { data } = await getMeasurements(id);
        setMeasurement(data);
      } catch (error) {
        console.error(error);
      }
    }
    getInspectionMeasurement();
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <div>
          <ReturnButton onClick={() => navigate(-1)} />
        </div>
        <StyledHeading>Grupos</StyledHeading>
      </TitleWrapper>
      {renderScatterChart(
        measurement ? formatData(measurement.clusters) : [],
        "campo magnético"
      )}
    </Container>
  );
}

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export default Groups;
