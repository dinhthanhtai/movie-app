/* eslint-disable @typescript-eslint/no-explicit-any */
import apiConfig from "./apiConfig";
import Instance from "./axiosClient";

export type TCate = "movie" | "tv";
export type TMovieType = "popular" | "upcoming" | "top_rated";
export type TtvType = "popular" | "top_rated" | "on_the_air";

export type CategoryType = {
	[type: TCate | string]: TCate;
};

export const category: CategoryType = {
	movie: "movie",
	tv: "tv"
};

type MovieType = {
	[type: string]: TMovieType;
};

export const movieType: MovieType = {
	upcoming: "upcoming",
	popular: "popular",
	top_rated: "top_rated"
};

type TVType = {
	[type: string]: TtvType;
};

export const tvType: TVType = {
	popular: "popular",
	top_rated: "top_rated",
	on_the_air: "on_the_air"
};

export type ResultResponseMovie = {
	name: string;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: Date;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type ResponseMovieDetail = ResultResponseMovie & {
	tagLine: string;
	status: string;
	spoken_languages: any[];
	runtime: number;
	revenue: number;
	production_countries: any[];
	production_companies: any[];
	imdb_id: string;
	homepage: string;
	genres: any[];
	budget: number;
	belongs_to_collection: string;
};

interface MovieResponse {
	page: number;
	results: ResultResponseMovie[];
	total_pages: number;
	total_results: number;
}

export type ResultResponseVideo = {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: Date;
	id: string;
};

export type CastResponse = {
	cast: any;
	adult: boolean;
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	order: number;
	original_name: string;
	popularity: number;
	profile_path: string;
};

export type CreditResponse = {
	cast: CastResponse[];
	crew: any[];
	id: number;
};

interface VideoResponse {
	id: string;
	results: ResultResponseVideo[];
}

const tmdbApi = {
	getMoviesList: (type: TMovieType, params?: object) => {
		const url = `movie/${movieType[type]}`;
		return Instance.get<MovieResponse>(url, params);
	},

	getTvList: (type: TtvType, params?: object) => {
		const url = `tv/${tvType[type]}`;
		return Instance.get<MovieResponse>(url, params);
	},

	getVideos: (cate: TCate, id: number) => {
		const url = `${category[cate]}/${id}/videos`;
		return Instance.get<VideoResponse>(url, { params: {} });
	},

	search: (cate: TCate, params?: object) => {
		const url = `search/${category[cate]}`;
		return Instance.get<MovieResponse>(url, params);
	},

	detail: (cate: TCate, id: string, params?: object) => {
		const url = `${category[cate]}/${id}`;
		return Instance.get<ResponseMovieDetail>(url, params);
	},

	credits: (cate: TCate, id: number) => {
		const url = `${category[cate]}/${id}/credits?api_key=${apiConfig.apiKey}`;
		return Instance.get<CreditResponse>(url);
	},

	similar: (cate: TCate, id: string) => {
		const url = `${category[cate]}/${id}/similar?api_key=${apiConfig.apiKey}`;
		return Instance.get(url);
	}
};

export default tmdbApi;
