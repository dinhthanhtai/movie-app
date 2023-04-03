import { FC } from "react";
import { useNavigate } from "react-router-dom";

import tmdbApi, { category, ResultResponseMovie } from "@/api/tmdbApi";
import apiConfig from "@/api/apiConfig";
import { Button } from "@/components/atoms";

import "./hero-slide.scss";

interface IProps {
	item: ResultResponseMovie;
	className?: string;
}

const HeroSlideItem: FC<IProps> = ({ item, className }) => {
	const navigate = useNavigate();

	const { backdrop_path, poster_path, title, overview, id } = item;

	const background = apiConfig.originalImage(backdrop_path || poster_path);

	const setModalOpen = async () => {
		const modal = document.querySelector(`#modal_${id}`);

		const videos = await tmdbApi.getVideos(category.movie, id);

		modal && modal.classList.toggle("active");

		if (videos.data.results.length > 0 && modal !== null) {
			const videSrc =
				"https://www.youtube.com/embed/" + videos.data.results[0].key;
			modal
				.querySelector(".modal-content > iframe")
				?.setAttribute("src", videSrc);
		} else {
			const elem = modal?.querySelector(".modal-content");
			if (elem) {
				elem.innerHTML = "No trailer";
			}
		}
	};

	return (
		<div
			className={`hero-slide__item ${className}`}
			style={{ backgroundImage: `url(${background})`, height: "100%" }}
		>
			<div className='hero-slide__item-content container'>
				<div className='hero-slide__item-content__info'>
					<h2 className='title'> {title} </h2>
					<p className='overview'> {overview} </p>
					<div className='btns'>
						<Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button>
						<Button outLine onClick={setModalOpen}>
							Watch Trailer
						</Button>
					</div>
				</div>
				<div className='hero-slide__item-content__poster'>
					<img src={apiConfig.w500Image(poster_path)} alt='' />
				</div>
			</div>
		</div>
	);
};

export default HeroSlideItem;
