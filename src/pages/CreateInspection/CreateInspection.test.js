import { render, screen } from "@testing-library/react";
import CreateInspection from "./CreateInspection";

describe("<CreateInspection />", () => {
  it("should render create inspection page", () => {
    render(<CreateInspection />);

    expect(
      screen.getByRole("heading", { name: /criar inspeção/i })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/local/i)).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /criar/i })).toBeInTheDocument();
  });
});
