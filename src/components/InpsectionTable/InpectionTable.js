import styled from "styled-components";
import { SmallButton } from "../Button/Button";

function InpsectionTable({ inspections, goToGroup, goToGraphs }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Local</td>
          <td>PIG</td>
          <td />
        </tr>
      </thead>
      <tbody>
        {inspections &&
          inspections.map(({ id, name, place, pig_number }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{place}</td>
              <td>{pig_number}</td>
              <ButtonsTD>
                <SmallButton onClick={() => goToGroup(id)}>Grupos</SmallButton>
                <SmallButton onClick={() => goToGraphs(id)}>
                  Gráficos
                </SmallButton>
              </ButtonsTD>
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
}

const ButtonsTD = styled.td`
  display: flex;
  justify-content: space-evenly;
`;

const StyledTable = styled.table`
  border-collapse: collapse;

  width: 100%;

  & tr {
    border-bottom: 2px solid var(--color-grey-darker);
    text-align: center;
  }

  & td {
    padding: 16px 0;
  }

  & td:first-child {
    padding-left: 10px;
  }

  & td:last-child {
    padding-right: 10px;
  }

  & thead tr:first-child {
    border-bottom: 5px solid var(--color-grey-darker);
    font-weight: bold;
    padding: 20px;
  }
`;

export default InpsectionTable;
