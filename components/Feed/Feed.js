import React from 'react';
import '../pages/pages.css';
import './feed.css'
import { Data } from '../pages/Data';

import { Link } from 'react-router-dom'



export const Feed = () => {
    return (
        <main className="grid">
            <div className="content">
                <h1 className='text-4xl font-bold pb-5'>Videos</h1>
                <div className="cards"> {/* Add a class name for styling */}
                    {Data.map((video) => (

                        <div key={video.id}>
                            <Link to={`/video?/${video.id}`} className="link"> {/*href={() => (window.location.pathname = video.videoSRC)} */}
                                <div className="thumbnail" onClick={() => {
                                    console.log('CardContent clicked');
                                }}>
                                    <img
                                        alt="Thumbnail"
                                        className="vedio"
                                        height={720}
                                        src={video.thumbnail}
                                        width={1280}
                                    />
                                </div>
                                <div className="card-content">
                                    <div className="vedio-title">
                                        {video.videoTitle}
                                        <div className="description">
                                            {video.Views} &bull;
                                            {video.Time}
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </div >

                    ))}
                </div>
            </div>
        </main >
    );
};

export default Feed;
