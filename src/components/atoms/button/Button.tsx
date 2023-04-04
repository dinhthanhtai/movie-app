import React, { FC } from "react";
import classNames from "classnames";

import "./button.scss";

interface IProps {
	outLine?: boolean;
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
}

const Button: FC<IProps> = ({
	onClick,
	outLine,
	children,
	className,
	...otherProps
}) => {
	return (
		<button
			onClick={onClick}
			className={classNames(
				"btn",
				{
					"btn-outline": outLine
				},
				className
			)}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
