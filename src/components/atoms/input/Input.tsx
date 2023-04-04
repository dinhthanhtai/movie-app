import { FC } from "react";

import "./input.scss";

interface IProps {
	type: string;
	placeholder: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ type, placeholder, value, onChange }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
