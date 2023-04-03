import tmdbApi, {
	movieType,
	ResultResponseMovie,
	TCate,
	tvType
} from "@/api/tmdbApi";
import { useEffect, useState } from "react";

export default function useSearch(query = "", page: number, category: TCate) {
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState<ResultResponseMovie[]>([]);

	const loadMore = async () => {
		setLoading(true);
		let response = null;
		if (query === "") {
			const params = {
				page
			};
			switch (category) {
			case "movie":
				response = await tmdbApi.getMoviesList(movieType.upcoming, {
					params
				});
				break;
			default:
				response = await tmdbApi.getTvList(tvType.popular, { params });
			}

			if (response.data) {
				const { results } = response.data;
				const all = new Set([...items, ...results]);
				setItems([...all]);
			}
		} else {
			const params = {
				page,
				query: query
			};
			response = await tmdbApi.search(category, { params });

			if (response.data) {
				const { results } = response.data;
				setItems([...results]);
			}
		}

		setLoading(false);
	};

	useEffect(() => {
		if (page <= 5) {
			loadMore();
		}
	}, [page, query]);

	return { items, loading, loadMore };
}
