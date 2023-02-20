import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText("Welcome Dear Client!");
    const description = screen.getByText("This is a test");
    const lowTitle = screen.getByText("Task");

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(lowTitle).toBeInTheDocument();
  });
});
