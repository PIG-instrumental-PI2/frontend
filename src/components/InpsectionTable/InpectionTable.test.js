import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InpsectionTable from "./InpectionTable";

describe("<InpsectionTable />", () => {
  it("should render table header", () => {
    render(<InpsectionTable />);

    const table = screen.getByRole("table");
    const nameCell = within(table).getByRole("cell", { name: /nome/i });
    const localCell = within(table).getByRole("cell", { name: /local/i });
    const pigCell = within(table).getByRole("cell", { name: /pig/i });

    expect(nameCell).toBeInTheDocument();
    expect(localCell).toBeInTheDocument();
    expect(pigCell).toBeInTheDocument();
  });

  it("should render table lines with inspection data", () => {
    render(
      <InpsectionTable
        inspections={[
          {
            id: "inpection_id",
            name: "inspection_name",
            place: "inspection_place",
            pig_number: "pig_number",
          },
        ]}
      />
    );

    const table = screen.getByRole("table");

    const nameCell = within(table).getByRole("cell", {
      name: /inspection_name/i,
    });
    const placeCell = within(table).getByRole("cell", {
      name: /inspection_place/i,
    });
    const pigCell = within(table).getByRole("cell", {
      name: /pig_number/i,
    });

    const buttonGroup = within(table).getByRole("button", {
      name: /grupos/i,
    });

    const buttonGraph = within(table).getByRole("button", {
      name: /gráficos/i,
    });

    expect(nameCell).toBeInTheDocument();
    expect(placeCell).toBeInTheDocument();
    expect(pigCell).toBeInTheDocument();
    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGraph).toBeInTheDocument();
  });

  it("should call goToGroup function on group button click", () => {
    const goToGroupMock = jest.fn();
    render(
      <InpsectionTable
        inspections={[
          {
            id: "inpection_id",
            name: "inspection_name",
            place: "inspection_place",
            pig_number: "pig_number",
          },
        ]}
        goToGroup={goToGroupMock}
      />
    );

    const table = screen.getByRole("table");

    const buttonGroup = within(table).getByRole("button", {
      name: /grupos/i,
    });

    userEvent.click(buttonGroup);

    expect(goToGroupMock).toHaveBeenCalledWith("inpection_id");
  });

  it("should call goToGraphs function on graph button click", () => {
    const goToGraphsMock = jest.fn();
    render(
      <InpsectionTable
        inspections={[
          {
            id: "inpection_id",
            name: "inspection_name",
            place: "inspection_place",
            pig_number: "pig_number",
          },
        ]}
        goToGraphs={goToGraphsMock}
      />
    );

    const table = screen.getByRole("table");

    const buttonGraph = within(table).getByRole("button", {
      name: /gráficos/i,
    });

    userEvent.click(buttonGraph);

    expect(goToGraphsMock).toHaveBeenCalledWith("inpection_id");
  });
});
