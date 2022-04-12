import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

function renderNavbar() {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
}

describe("<Navbar />", () => {
  it("should render navbar", () => {
    renderNavbar();

    expect(screen.getAllByRole("img")[0]).toHaveAttribute("alt", "Pigsty Logo");
    expect(
      screen.getByRole("button", { name: /inspeções/i })
    ).toBeInTheDocument();
  });

  it("should redirect page to / on inspections click", () => {
    renderNavbar();

    const inspectionsButton = screen.getByRole("button", {
      name: /inspeções/i,
    });

    userEvent.click(inspectionsButton);

    expect(mockedNavigate).toHaveBeenCalledWith("/");
  });
});
