import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

const mockNavigate = jest.fn();

function renderNavbar() {
  return render(<Navbar navigate={mockNavigate} />);
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

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
