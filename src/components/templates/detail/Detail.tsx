import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import tmdbApi, { TCate, ResponseMovieDetail } from "@/api/tmdbApi";
import apiConfig from "@/api/apiConfig";
import CastList from "./CastList";
import VideoList from "./VideoList";

import "./detail.scss";
import { MovieList } from "@/components/organisms";

const Detail = () => {
	const { pathname } = useLocation();
	const { id } = useParams();
	const category = pathname.split("/")[1] as TCate;

	const [movie, setMovie] = useState<ResponseMovieDetail>();

	useEffect(() => {
		const getDetail = async () => {
			if (!id) return;
			const response = await tmdbApi.detail(category, id, { params: {} });
			setMovie(response.data);
			window.scrollTo(0, 0);
		};

		getDetail();
	}, [category, id]);

	return (
		<>
			{movie && (
				<>
					<div
						className='banner'
						style={{
							backgroundImage: `url(${apiConfig.originalImage(
								movie.backdrop_path || movie.poster_path
							)})`
						}}
					></div>
					<div className='mb-3 movie-content container'>
						<div className='movie-content__poster'>
							<div
								className='movie-content__poster__img'
								style={{
									backgroundImage: `url(${apiConfig.originalImage(
										movie.poster_path || movie.backdrop_path
									)})`
								}}
							></div>
						</div>
						<div className='movie-content__info'>
							<h1 className='title'>{movie.title || movie.name}</h1>
							<div className='genres'>
								{movie.genres &&
									movie.genres.slice(0, 5).map((genre, i) => (
										<span key={i} className='genres__item'>
											{genre.name}
										</span>
									))}
							</div>
							<p className='overview'>{movie.overview}</p>
							<div className='cast'>
								<div className='section__header'>
									<h2>Casts</h2>
								</div>
								<CastList id={movie.id} category={category} />
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='section mb-3'>
							<VideoList id={movie.id} category={category} />
						</div>
						<div className='section mb-3'>
							<div className='section__header mb-2'>
								<h2>Similar</h2>
							</div>
							<MovieList
								category={category}
								type='similar'
								id={String(movie.id)}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Detail;
