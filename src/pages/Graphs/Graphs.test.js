import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import api from "../../services/api";
import Graphs from "./Graphs";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("<Graphs/>", () => {
  it("should render Graphs page.", () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        times: [],
        temperatures: [],
        speeds: [],
        positions: [],
        magnetic_fields_avg: [],
      })
    );
    render(<Graphs />);

    expect(
      screen.getByRole("heading", { name: /Gráficos/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar/i })).toBeInTheDocument();
  });

  it("should go back to Inspection Page on 'voltar' button click.", () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        times: [],
        temperatures: [],
        speeds: [],
        positions: [],
        magnetic_fields_avg: [],
      })
    );
    render(<Graphs />);

    const backButton = screen.getByRole("button", {
      name: /voltar/i,
    });

    userEvent.click(backButton);

    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });
});
