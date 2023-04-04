import { useState, useEffect, FC } from "react";

import tmdbApi, { CastResponse, TCate } from "@/api/tmdbApi";
import apiConfig from "@/api/apiConfig";

import "./castList.scss";

interface IProps {
	id: number;
	category: TCate;
}

const CastList: FC<IProps> = ({ id, category }) => {
	const [casts, setCasts] = useState<CastResponse[]>([]);

	useEffect(() => {
		const getCredits = async () => {
			const {
				data: { cast }
			} = await tmdbApi.credits(category, id);

			setCasts(cast.slice(0, 5));
		};
		getCredits();
	}, [category, id]);
	return (
		<div className='casts'>
			{casts.map((item, i) => {
				const url = apiConfig.w500Image(item.profile_path);

				return (
					<div key={i} className='casts__item'>
						<div
							className='casts__item__img'
							style={{ backgroundImage: `url(${url})` }}
						></div>
						<p className='casts__item__name'>{item.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default CastList;
