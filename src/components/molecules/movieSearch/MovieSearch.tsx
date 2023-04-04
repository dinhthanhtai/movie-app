import { FC } from "react";

import { Button, Input } from "@/components/atoms";

import "./movieSearch.scss";

interface IProps {
	keyword: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: () => void;
}

const MovieSearch: FC<IProps> = ({ keyword, onChange }) => {
	return (
		<div className='movie-search'>
			<Input
				type='text'
				placeholder='Enter keyword'
				value={keyword}
				onChange={onChange}
			/>
			<Button className='small'>Search</Button>
		</div>
	);
};

export default MovieSearch;
