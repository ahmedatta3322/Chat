import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Test Generate Response", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Generate Response/i);
  userEvent.click(buttonEl);
  const message = screen.getByText(/Lorem ipsum/i);
  expect(message).toBeInTheDocument();
  screen.debug();
});
test("Test Send Message", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Send/i);
  const messageInput = screen.getByLabelText("message_content");
  userEvent.type(messageInput, "ahmed");
  userEvent.click(buttonEl);
  const message = screen.getByText(/ahmed/i);
  expect(message).toBeInTheDocument();
  screen.debug();
});

test("Test Disabled button", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Send/i);
  const messageInput = screen.getByLabelText("message_content");
  userEvent.type(messageInput, "");
  expect(buttonEl).toBeDisabled();
});
test("Test Enabled button", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Send/i);
  const messageInput = screen.getByLabelText("message_content");
  userEvent.type(messageInput, "ahmed");
  expect(buttonEl).not.toBeDisabled();
});
