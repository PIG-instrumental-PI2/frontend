import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import api from "../../services/api";
import Groups from "./Groups";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("<Groups/>", () => {
  it("should render Groups page.", () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        clusters: [],
      })
    );
    render(<Groups />);

    expect(
      screen.getByRole("heading", { name: /Grupos/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar/i })).toBeInTheDocument();
  });

  it("should go back to Inspection Page on 'voltar' button click.", () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        clusters: [],
      })
    );
    render(<Groups />);

    const backButton = screen.getByRole("button", {
      name: /voltar/i,
    });

    userEvent.click(backButton);

    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });
});
