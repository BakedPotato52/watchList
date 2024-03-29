
import React from 'react';
import T1 from '../images/t1.png';
import T2 from '../images/t2.png';
import T3 from '../images/t3.png';
import SampleVideo from './SampleVIdeo/SampleVideo.mp4'

import { useTime } from 'react-timer-hook';
import './pages.css';
import '../Feed/feed.css';
import { Link } from 'react-router-dom';
import { CardContent, CardFooter, Card } from '../ui/Card';

const truncateDescription = (description) => description.slice(0, 50);

const Video = () => {
    const Data = [
        {
            id: 1,
            thumbnail: T1,
            title: 'Video 1',
            description: 'This is the description of video 1',
            publishedAt: '2022-01-01T00:00:00Z',
            URL: SampleVideo, // Use SampleVideo here,
        },
        {
            id: 2,
            thumbnail: T2,
            title: 'Video 2',
            description: 'This is the description of video 2',
            publishedAt: '2022-01-02T00:00:00Z',
            URL: '/video2',
        },
        {
            id: 3,
            thumbnail: T3,
            title: 'Video 3',
            description: 'This is the description of video 3',
            publishedAt: '2022-01-03T00:00:00Z',
            URL: '/video3',
        },
    ];

    const MyTime = ({ time }) => {
        const { hours, minutes, seconds } = useTime(time);
        return (
            <span>
                {hours}:{minutes}:{seconds}
            </span>
        );
    };

    return (
        <>
            <div className="grid">
                <div className="content">
                    <h1>Video</h1>
                    <div className="cards">
                        {Data.map((val) => (
                            <Card key={val.id}>
                                <Link to={val.URL}>
                                    <CardContent id="thumbnail">
                                        <img
                                            alt="Thumbnail"
                                            className="vedio"
                                            height={225}
                                            src={val.thumbnail}
                                            width={400}
                                        />
                                    </CardContent>
                                    <h3 id="title">{val.title}</h3>
                                </Link>
                                <CardFooter className="description">
                                    <p id="description">
                                        {truncateDescription(val.description)}
                                    </p>
                                    <p id="publishedAt">
                                        <MyTime>{val.publishedAt}</MyTime>
                                    </p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Video;