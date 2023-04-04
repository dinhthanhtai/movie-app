import PageHeader from "./PageHeader";
import { screen, render } from "@testing-library/react";

test("Should render PageHeader Component", () => {
	render(<PageHeader> something test </PageHeader>);

	screen.debug();
});
