import { FC } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/Movie.svg";
import bg from "@/assets/footer-bg.jpeg";

import "./footer.scss";

const Footer: FC = () => {
	return (
		<div className="footer" style={{ backgroundImage: `url(${bg})` }}>
			<div className="footer--content container">
				<div className="footer--content__logo">
					<div className="logo">
						<img src={logo} alt="" />
						<Link to='/'> Movie </Link>
					</div>
				</div>
			</div>
			<div className="footer--content__menus">
				<div className="footer--content__menu">
					<Link to='/'> Home </Link>
					<Link to='/'> Contact us </Link>
					<Link to='/'> Term of services </Link>
					<Link to='/'> About us </Link>
				</div>
				<div className="footer--content__menu">
					<Link to='/'> Live </Link>
					<Link to='/'> FAQ </Link>
					<Link to='/'> Premium </Link>
					<Link to='/'> Privacy policy </Link>
				</div>
				<div className="footer--content__menu">
					<Link to='/'> You must watch </Link>
					<Link to='/'> Recent release </Link>
					<Link to='/'> Top IMDB </Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
