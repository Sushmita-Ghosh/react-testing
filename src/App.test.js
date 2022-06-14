import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has the correct initial color and text", () => {
  render(<App />);

  //button has the initial background color of blue and text as Change to red
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ "background-color": "red" });
});

test("button has the correct color and text when clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ "background-color": "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "blue" });
});

test("initial conditions of buttons and checkbox", () => {
  render(<App />);

  //check that button starts out enabled

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that checkbox is unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox when clicked disables button and when not clicked enables button", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  // disable button on checked
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  //enable on unchecked
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // When we disable the the checkbox the background color of the button should be gray
  // diable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "gray" });

  // When we click on the checkbox the background color of the button should be red
  //re-enable-button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "red" });
});

test("Disabled button has gray background and reverts to blue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);

  // When we disable the the checkbox the background color of the button should be gray
  // diable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "gray" });

  // When we click on the checkbox the background color of the button should be blue
  //re-enable-button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ "background-color": "blue" });
});
