import { FC } from "react";

import bg from "@/assets/footer-bg.jpeg";

import "./pageHeader.scss";

interface IProps {
	children: React.ReactNode;
}

const PageHeader: FC<IProps> = ({ children }) => {
	return (
		<div className="page-header" style={{ background: `url(${bg})` }}>
			<h2>{children}</h2>
		</div>
	);
};

export default PageHeader;
