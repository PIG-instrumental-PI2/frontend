import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import api from "../../services/api";
import Groups from "./Groups";
import { formatData } from "./utils";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

jest.mock("./utils.js", () => ({
  ...jest.requireActual("./utils.js"),
  formatData: jest.fn(),
}));

describe("<Groups/>", () => {
  it("should render Groups page.", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          clusters: [],
        },
      })
    );
    render(<Groups />);

    await waitFor(() => {
      expect(formatData).toHaveBeenCalled();
    });

    expect(
      screen.getByRole("heading", { name: /Grupos/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar/i })).toBeInTheDocument();

    expect(screen.getByText("campo magnético")).toBeInTheDocument();
  });

  it("should go back to Inspection Page on 'voltar' button click.", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          clusters: [],
        },
      })
    );
    render(<Groups />);

    await waitFor(() => {
      expect(formatData).toHaveBeenCalled();
    });

    const backButton = screen.getByRole("button", {
      name: /voltar/i,
    });

    userEvent.click(backButton);

    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });

  it("should call format data correctly", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          clusters: [[1], [2], [3]],
        },
      })
    );
    render(<Groups />);

    await waitFor(() => {
      expect(formatData).toHaveBeenCalled();
    });

    expect(formatData).toHaveBeenCalledWith([[1], [2], [3]]);
  });

  it("should call console error on request failing", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() => Promise.reject(400));

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementationOnce(() => {});

    render(<Groups />);

    await waitFor(() => expect(consoleSpy).toHaveBeenCalled());
  });
});
