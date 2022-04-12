import { useNavigate } from "react-router-dom";
import Button, { SmallButton } from "../components/Button/Button";
import InpsectionTable from "../components/InpsectionTable/InpectionTable";
import Input, { Select } from "../components/Input/Input";

export default function Inspections() {
  return (
    <div>
      <div>
        <h1>Initial App</h1>
        <Button>Entrar</Button>
        <SmallButton>Entrar</SmallButton>
      </div>
      <Input placeholder="Email" />
      <Select>
        <option disabled selected value>
          Número de Série do PIG
        </option>
        <option>Valor 1</option>
        <option>Valor 2</option>
      </Select>
      <InpsectionTable
        inspections={[
          {
            id: "inpection_id",
            name: "inspection_name",
            place: "inspection_place",
            pig_number: "pig_number",
          },
          {
            id: "inpection_id2",
            name: "inspection_name2",
            place: "inspection_place2",
            pig_number: "pig_number2",
          },
        ]}
      />
    </div>
  );
}
