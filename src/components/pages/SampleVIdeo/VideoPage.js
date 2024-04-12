import React from 'react';
import './VideoPage.css'
import SampleVideo from './SampleVideo.mp4'
import { Data } from '../Data'
import ReactPlayer from 'react-player'

const VideoPage = () => {
    return (
        <div className="videoPlayer">
            <div className="video">

                <ReactPlayer
                    url={SampleVideo}
                    playing={false}
                    controls
                    light={false}
                    pip={false}
                    loop
                    volume={null}
                    width={640}
                    height={360}

                />
            </div>
            {/*   <video
                className='video'
                src={SampleVideo}
                controls
                autoPlay
                muted
                loop
            >
            </video>*/}
            {Data.map((video) => (
                <div key={video.id}>

                    <div className="card-content">
                        <div className="vedio-title">
                            {video.videoTitle}
                            <div className="description">
                                {video.Views} &bull;
                                {video.Time}
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoPage;