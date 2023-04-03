import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";

import apiConfig from "@/api/apiConfig";
import { Button } from "@/components/atoms";
import { ResultResponseMovie, TCate } from "@/api/tmdbApi";

import "./movieCard.scss";

interface IProps {
	item: ResultResponseMovie;
	category: TCate;
}

const MovieCard = forwardRef<HTMLDivElement, IProps>(
	({ item, category }, ref) => {
		const { poster_path, backdrop_path, id, title, name } = item;

		const link = `/${category}/${id}`;

		const bg = apiConfig.w500Image(poster_path || backdrop_path);

		return (
			<Link to={link}>
				<div
					ref={ref}
					className='movie-card'
					style={{ backgroundImage: `url(${bg})` }}
				>
					<Button>
						<BiPlay />
					</Button>
				</div>
				<h3> {title || name} </h3>
			</Link>
		);
	}
);

MovieCard.displayName = "MovieCard";

export default MovieCard;
