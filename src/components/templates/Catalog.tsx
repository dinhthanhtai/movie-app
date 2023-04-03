import { category as cate, TCate } from "@/api/tmdbApi";
import { useLocation, Outlet } from "react-router-dom";

import { PageHeader } from "../molecules";
import MovieGrid from "../molecules/movieGrid/MovieGrid";

const Catalog = () => {
	const { pathname } = useLocation();
	const category = pathname.slice(1);

	return (
		<>
			<PageHeader>
				{category === cate.movie ? "Movies" : "TV Series"}
			</PageHeader>
			<div className='container'>
				<div className='section mb-3'>
					<MovieGrid key={category} category={category as TCate} />
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Catalog;
