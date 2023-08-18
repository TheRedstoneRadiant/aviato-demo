import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders preloader", () => {
  render(<App />);
  const preloaderElement = screen.getByTestId("preloader");
  expect(preloaderElement).toBeInTheDocument();
});

test("renders main content when loading is complete", () => {
  render(<App isLoading={false} />);
  const navigationBarElement = screen.getByRole("navigation");
  expect(navigationBarElement).toBeInTheDocument();
});

test("renders navigation bar", () => {
  render(<App isLoading={false} />);
  const navigationBarElement = screen.getByRole("navigation");
  expect(navigationBarElement).toBeInTheDocument();
});

test("renders images", () => {
  render(<App isLoading={false} />);
  const demoImage = screen.getByAltText("Demo");
  const investorsImage = screen.getByAltText("Investors");
  expect(demoImage).toBeInTheDocument();
  expect(investorsImage).toBeInTheDocument();
});

test("renders investor text", () => {
  render(<App isLoading={false} />);
  const investorText = screen.getByText(/Investors already using Aviato/i);
  expect(investorText).toBeInTheDocument();
});
