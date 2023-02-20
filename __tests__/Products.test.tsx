import "@testing-library/jest-dom";
import React from "react";
import { render, cleanup, screen, act } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Products from "@/pages/products";

const allReports = [
  {
    createdAt: "2022-12-24T21:33:04.838Z",
    job: "International Intranet Producer",
    description: "Test APi",
    id: "1",
  },
];
const handlers = [
  rest.get("http://localhost/api/staticdata", async (req, res, ctx) =>
    res(ctx.json(allReports))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());

describe("api data is coming correctly", () => {
  it("correct data", async () => {
    await act(async () => {
      render(<Products />);
    });

    expect(screen.getByText("Products☻")).toBeInTheDocument();
    expect(screen.getByText("International Intranet Producer")).toBeDefined();
    expect(screen.getByText("Test APi")).toBeDefined();
  });
});
