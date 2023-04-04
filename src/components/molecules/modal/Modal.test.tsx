import Modal from "./Modal";
import { screen, render, fireEvent } from "@testing-library/react";

test("should render Modal component", () => {
	const onClose = jest.fn();
	render(<Modal onClose={onClose}>something here!</Modal>);
	const text = screen.getByText("something here!");
	const modalContent = document.querySelector(".modal-content__close");

	if (!modalContent) return;
	fireEvent.click(modalContent);

	expect(text).toBeInTheDocument();
});
