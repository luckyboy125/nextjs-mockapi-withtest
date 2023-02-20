import AboutUs from "@/pages/aboutus";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(<AboutUs />);

    const heading = screen.getByText("TEAM☻");
    const images = screen.getAllByAltText(/team.*?/i);
    expect(heading).toBeInTheDocument();
    expect(images).not.toBeNull();
  });
});
