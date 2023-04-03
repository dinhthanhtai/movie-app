import { Link, Outlet } from "react-router-dom";
import { Button } from "../atoms";

import { HeroSlide } from "../molecules";
import { MovieList } from "../organisms";

import { category, movieType, tvType } from "@/api/tmdbApi";

const Home = () => {
	return (
		<>
			<HeroSlide />
			<div className='container'>
				<div className='section mb-3'>
					<div className='section--header mb-2'>
						<h2> Trending Movies </h2>
						<Link to='/movie'>
							<Button outLine className='small'>
								View More
							</Button>
						</Link>
					</div>
					<MovieList category={category.movie} type={movieType.popular} />
				</div>
				<div className='section mb-3'>
					<div className='section--header mb-2'>
						<h2> Top Rated Movies </h2>
						<Link to='/tv'>
							<Button outLine className='small'>
								View More
							</Button>
						</Link>
					</div>
					<MovieList category={category.tv} type={tvType.popular} />
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Home;
