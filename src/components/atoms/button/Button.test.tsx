import Button from "./Button";
import { render, screen } from "@testing-library/react";

test("Should show Button component", () => {
	render(<Button>Button</Button>);
	const button = screen.getByText("Button");

	expect(button).toBeInTheDocument();
});
