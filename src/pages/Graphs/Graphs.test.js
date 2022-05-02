import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import api from "../../services/api";
import Graphs from "./Graphs";
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

describe("<Graphs/>", () => {
  it("should render Graphs page.", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          times: [],
          temperatures: [],
          speeds: [],
          positions: [],
          magnetic_fields_avg: [],
        },
      })
    );
    render(<Graphs />);

    await waitFor(() => {
      expect(formatData).toHaveBeenCalled();
    });

    expect(
      screen.getByRole("heading", { name: /Gráficos/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar/i })).toBeInTheDocument();
  });

  it("should go back to Inspection Page on 'voltar' button click.", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          times: [],
          temperatures: [],
          speeds: [],
          positions: [],
          magnetic_fields_avg: [],
        },
      })
    );
    render(<Graphs />);

    await waitFor(() => {
      expect(formatData).toHaveBeenCalled();
    });

    const backButton = screen.getByRole("button", {
      name: /voltar/i,
    });

    userEvent.click(backButton);

    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });

  it("should call formatData for every graph", async () => {
    jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          times: [200, 400, 600],
          temperatures: [45, 46, 47],
          speeds: [5, 6, 7],
          positions: [100, 200, 300],
          magnetic_fields_avg: [2.5, 2.6, 2.7],
        },
      })
    );
    render(<Graphs />);

    await waitFor(() => {
      expect(formatData).toHaveBeenCalledTimes(4);
    });

    expect(formatData).toHaveBeenNthCalledWith(
      1,
      [200, 400, 600],
      [45, 46, 47]
    );

    expect(formatData).toHaveBeenNthCalledWith(2, [200, 400, 600], [5, 6, 7]);

    expect(formatData).toHaveBeenNthCalledWith(
      3,
      [200, 400, 600],
      [100, 200, 300]
    );

    expect(formatData).toHaveBeenNthCalledWith(
      4,
      [200, 400, 600],
      [2.5, 2.6, 2.7]
    );
  });
});
