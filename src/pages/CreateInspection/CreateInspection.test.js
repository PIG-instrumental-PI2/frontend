import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CreateInspection from "./CreateInspection";
import api from "../../services/api";
import userEvent from "@testing-library/user-event";
import axios from "axios";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));



function mockGetPigList(){
  jest.spyOn(api, "get").mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: "pig_id",
            pig_number: "pig_number",
          },
        ]
      })
  );
}

describe("<CreateInspection />", () => {
  it("should render create inspection page", async () => {
    mockGetPigList();
    render(<CreateInspection />);

    expect(
      await screen.findByRole("heading", { name: /criar inspeção/i })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/local/i)).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /criar/i })).toBeInTheDocument();
  });

  it("should redirect to inspections page on inspection create success", async () => {
    mockGetPigList();
    jest.spyOn(api, "post").mockImplementationOnce(() => Promise.resolve());

    render(
      <MemoryRouter>
        <CreateInspection />
      </MemoryRouter>
    );

    const nameInput = await screen.findByPlaceholderText(/nome/i);
    const localInput = screen.getByPlaceholderText(/local/i);
    const pigSelect = screen.getByRole("combobox");
    const button = screen.getByRole("button", { name: /criar/i });

    userEvent.type(nameInput, "name");
    userEvent.type(localInput, "local");
    userEvent.selectOptions(pigSelect, "pig_number");
    userEvent.click(button);

    await waitFor(() => expect(mockedNavigate).toBeCalledWith("/"));
  });
});
