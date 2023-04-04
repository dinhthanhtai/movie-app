import MovieSearch from "./MovieSearch";
import { screen, render } from "@testing-library/react";

test("Should render MovieSearch", () => {
	const onChange = jest.fn();

	render(<MovieSearch onChange={onChange} keyword='movie' />);
	const search = screen.getByText("Search");
	const value = screen.getByDisplayValue("movie") as HTMLInputElement;

	if (!value) return;
	expect(value.value).toBe("movie");
	expect(search).toBeInTheDocument();
});
