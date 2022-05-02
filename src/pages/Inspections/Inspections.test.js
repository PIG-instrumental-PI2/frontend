import {
  getByRole,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import api from "../../services/api";
import Inspections from "./Inspections";

function mockInspectionList() {
  jest.spyOn(api, "get").mockImplementationOnce(() =>
    Promise.resolve({
      data: [
        {
          id: "id",
          name: "name",
          place: "local",
          pig_number: "pig_number",
        },
        {
          id: "id1",
          name: "name",
          place: "local",
          pig_number: "pig_number",
        },
      ],
    })
  );
}

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("<Inspections />", () => {
  it("should render inspection page", async () => {
    mockInspectionList();
    render(<Inspections />);

    expect(
      screen.getByRole("heading", { name: /inspeções/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /criar inspeção/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    const table = await screen.findByRole("table");

    expect(table).toBeInTheDocument();
  });

  it("should render inspections on table", async () => {
    mockInspectionList();
    render(<Inspections />);

    const table = await screen.findByRole("table");

    expect(within(table).getAllByRole("row")).toHaveLength(3);
    expect(screen.getAllByText(/name/i)).toHaveLength(2);
  });

  it("should navigate to /create on 'Criar Inspeção' button click", async () => {
    mockInspectionList();
    render(<Inspections />);

    const loading = screen.getByText(/loading.../i);
    await waitForElementToBeRemoved(loading);

    const button = screen.getByRole("button", { name: /criar inspeção/i });

    userEvent.click(button);

    expect(mockedNavigate).toBeCalledWith("/create");
  });

  it("should navigate to /groups/<id> on 'Grupos' button click", async () => {
    mockInspectionList();
    render(<Inspections />);

    const loading = screen.getByText(/loading.../i);
    await waitForElementToBeRemoved(loading);

    const groupButtons = screen.getAllByRole("button", { name: /grupos/i });

    userEvent.click(groupButtons[0]);

    expect(mockedNavigate).toBeCalledWith("/groups/id");
  });

  it("should navigate to /graphs/<id> on 'Gráficos' button click", async () => {
    mockInspectionList();
    render(<Inspections />);

    const loading = screen.getByText(/loading.../i);
    await waitForElementToBeRemoved(loading);

    const groupButtons = screen.getAllByRole("button", { name: /gráficos/i });

    userEvent.click(groupButtons[0]);

    expect(mockedNavigate).toBeCalledWith("/graphs/id");
  });

  it("should call console error on request failing", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() => Promise.reject(400));

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementationOnce(() => {});

    render(<Inspections />);

    await waitFor(() => expect(consoleSpy).toHaveBeenCalled());
  });
});
