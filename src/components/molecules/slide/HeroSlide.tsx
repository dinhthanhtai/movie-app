import { FC, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi, { movieType } from "@/api/tmdbApi";

import { ResultResponseMovie } from "@/api/tmdbApi";

import "./hero-slide.scss";
import HeroSlideItem from "./HeroSlideItem";
import TrialModal from "./TrialModal";

const HeroSlide: FC = () => {
	const [movieItems, setMovieItems] = useState<ResultResponseMovie[]>([]);

	useEffect(() => {
		const getMovies = async () => {
			const params = { page: 1 };

			try {
				const response = await tmdbApi.getMoviesList(movieType.popular, {
					params
				});

				if (response.data) {
					setMovieItems(response.data.results.splice(1, 5));
				}
			} catch (error) {
				console.log(error);
			}
		};

		getMovies();
	}, []);

	return (
		<div className='hero-slide'>
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				modules={[Autoplay]}
				className='mySwiper'
				style={{ height: "100vh" }}
			>
				{movieItems.map((item) => (
					<SwiperSlide key={item.id}>
						{({ isActive }) => (
							<HeroSlideItem
								item={item}
								className={`${isActive ? "active" : ""}`}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			{movieItems.map((item) => (
				<TrialModal key={item.id} item={item} />
			))}
		</div>
	);
};

export default HeroSlide;
