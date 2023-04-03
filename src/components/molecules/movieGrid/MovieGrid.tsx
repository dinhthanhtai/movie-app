import { FC, useState, useRef, useEffect } from "react";
import useSearch from "@/utils/useSearch/useSearch";

import MovieCard from "../movieCard/MovieCard";
import MovieSearch from "../movieSearch/MovieSearch";
import { Spin } from "@/components/atoms";
import { TCate } from "@/api/tmdbApi";

import "./movieGrid.scss";

interface IProps {
	category: TCate;
}

const MovieGrid: FC<IProps> = ({ category }) => {
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

	const resultsSearch = useSearch(query, page, category);
	const { items, loading } = resultsSearch;

	const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setPage(1);
	};

	const observer = useRef(
		new IntersectionObserver((entries) => {
			const first = entries[0];
			if (first.isIntersecting) {
				setPage((no) => no + 1);
			}
		})
	);

	useEffect(() => {
		const currentElement = lastElement;
		const currentObserver = observer.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [lastElement]);

	return (
		<>
			<div className='section mb-3'>
				<MovieSearch onChange={onSearch} category={category} keyword={query} />
			</div>
			<div className='section mb-3'>
				<div className='movie-grid' key={category}>
					{items.map((item, idx) => (
						<MovieCard
							ref={setLastElement}
							item={item}
							category={category}
							key={item.id + idx}
						/>
					))}
				</div>
				{loading && <Spin />}
			</div>
		</>
	);
};
export default MovieGrid;
