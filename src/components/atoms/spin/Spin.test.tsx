import { Spin } from "../index";
import { screen, render } from "@testing-library/react";

test("Should show <Spin/> component", () => {
	render(<Spin />);
	const spin = screen.getByText("Loading Data");

	expect(spin).toBeInTheDocument();
});
