import { FC, useRef } from "react";

import { ResultResponseMovie } from "@/api/tmdbApi";
import Modal from "../modal/Modal";

interface IProps {
	item: ResultResponseMovie;
}

const TrialModal: FC<IProps> = ({ item }) => {
	const id = `modal_${item.id}`;

	const iframeRef = useRef<HTMLIFrameElement>(null);

	const onClose = () => {
		const modal = document.querySelector(`#${id}`);

		if (iframeRef.current) {
			iframeRef.current.setAttribute("src", "");
			modal?.classList.remove("active");
		}
	};

	return (
		<Modal onClose={onClose} open={false} id={id}>
			<iframe ref={iframeRef} width='100%' height='500px' title='trailer' />
		</Modal>
	);
};

export default TrialModal;
