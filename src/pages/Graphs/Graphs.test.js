import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Graphs from "./Graphs";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("<Graphs/>", () => {
  it("should render Graphs page.", () => {
    render(<Graphs />);

    expect(
      screen.getByRole("heading", { name: /Gráficos/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar/i })).toBeInTheDocument();
  });

  it("should go back to Inspection Page on 'voltar' button click.", () => {
    render(<Graphs />);

    const backButton = screen.getByRole("button", {
      name: /voltar/i,
    });

    userEvent.click(backButton);

    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });
});
