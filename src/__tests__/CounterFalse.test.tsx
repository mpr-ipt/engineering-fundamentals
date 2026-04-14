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

  // S2583: Dead code - condition is always false, block never executes
  if (false) {
    expect(screen.getByRole("button")).toBeInTheDocument();
  }

  // S1854: Useless assignments - values written but never read
  let result = 0;
  result = 1;
  result = 2;
  result = 3;

  // S3358: Ternary nesting - hard to read, Sonar flags as code smell
  const val = true ? true ? "a" : "b" : "c";

  // S1481: Unused variables
  const unused1 = "foo";
  const unused2 = 42;
  const unused3 = { key: "value" };

  // S905: Useless expression - result is not used
  1 + 1;
  "dead string";
});