import { Input } from "../index";
import { render, screen } from "@testing-library/react";

test("Should show <Input/> component", () => {
	const CInput = <Input type='text' placeholder='input search' />;
	render(CInput);
	const input = screen.getByPlaceholderText("input search");

	expect(input).toBeInTheDocument();
});
