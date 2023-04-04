import { FC, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi, {
	TCate,
	TMovieType,
	TtvType,
	ResultResponseMovie
} from "@/api/tmdbApi";

import "./movieList.scss";
import { MovieCard } from "@/components/molecules";

interface IProps {
	type: TMovieType | "similar" | TtvType;
	category: TCate;
	id?: string;
}

const MovieList: FC<IProps> = ({ type, category, id }) => {
	const [items, setItems] = useState<ResultResponseMovie[]>([]);

	useEffect(() => {
		const getList = async () => {
			let response = null;
			const params = {};

			if (type === "similar") {
				response = await tmdbApi.similar(category, id || "");
			} else {
				switch (category) {
				case "movie":
					response = await tmdbApi.getMoviesList(type as TMovieType, {
						params
					});
					break;
				default:
					response = await tmdbApi.getTvList(type as TtvType, { params });
				}
			}
			setItems(response.data.results);
		};

		getList();
	}, []);

	return (
		<div className='movie-list'>
			<Swiper
				grabCursor
				spaceBetween={10}
				slidesPerView='auto'
				modules={[Autoplay]}
				className='mySwiper'
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<MovieCard item={item} category={category} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default MovieList;
