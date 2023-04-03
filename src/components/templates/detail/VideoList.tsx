import { useState, useEffect, useRef, FC } from 'react';

import tmdbApi, { ResultResponseVideo, TCate } from '@/api/tmdbApi';

import './videoList.scss';

interface IProps {
    id: number, 
    category: TCate,
}

const VideoList: FC<IProps> = ({ id, category}) => {
    const [videos, setVideos] = useState<ResultResponseVideo[] | []>([]);

    useEffect(() => {
        const getVideos = async () => {
            const { data: { results } } = await tmdbApi.getVideos(category, id);
          
            setVideos(results.slice(0, 5));
        }
        getVideos();
    }, [category, id]);

    return (
        <>
            {
                videos.map((movie, i) => (
                    <Video key={i} movie={movie}/>
                ))
            }
        </>
    );
}

interface IVideoProps {
    movie: ResultResponseVideo
}

const Video: FC<IVideoProps> = ({ movie }) => {

    const iframeRef = useRef<HTMLIFrameElement | null >(null);

    useEffect(() => {
        if (!iframeRef.current) return;
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{movie.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${movie.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
