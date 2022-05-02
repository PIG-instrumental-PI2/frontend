import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";
import { useNavigate, useParams } from "react-router-dom";
import { Heading, Container } from "../../styles/Pages.styled";
import { ReturnButton } from "../../components/Button/Button";
import { getMeasurements } from "../../services/inspections";
import { formatData } from "./utils";

function renderLineChart(data, yLabel, xLabel = "tempo(ms)") {
  return (
    <div style={{ margin: 20 }}>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ bottom: 20, top: 20, left: 50 }}
      >
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="x" label={{ value: xLabel, position: "bottom" }} />
        <YAxis domain={[]}>
          <Label
            value={yLabel}
            position="insideBottomLeft"
            offset={-30}
            angle={-90}
          />
        </YAxis>
        <Tooltip />
      </LineChart>
    </div>
  );
}

function Graphs() {
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
        <StyledHeading>Gráficos</StyledHeading>
      </TitleWrapper>
      {renderLineChart(
        measurement
          ? formatData(measurement.times, measurement.temperatures)
          : [],
        "temperatura(ºC)"
      )}
      {renderLineChart(
        measurement ? formatData(measurement.times, measurement.speeds) : [],
        "velocidade(m/s)"
      )}
      {renderLineChart(
        measurement ? formatData(measurement.times, measurement.positions) : [],
        "posição(m)"
      )}
      {renderLineChart(
        measurement
          ? formatData(measurement.times, measurement.magnetic_fields_avg)
          : [],
        "média do campo magnético"
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

export default Graphs;
