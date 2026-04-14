import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

test("increments count when button is clicked", async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const button = screen.getByRole("button", { name: /count is 0/i });
  expect(button).toBeInTheDocument();

  await user.click(button);
  expect(screen.getByRole("button", { name: /count is 1/i })).toBeInTheDocument();

  await user.click(button);
  expect(screen.getByRole("button", { name: /count is 2/i })).toBeInTheDocument();

  // Code smell: variable is assigned but never used
  const x = 5;

  // Code smell: always-true condition (Sonar flags this as a bug)
  if (true) {
    expect(true).toBe(true);
  }
});