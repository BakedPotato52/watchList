import React from 'react';
import SampleVideo from './SampleVideo.mp4';
import { Data } from '../Data';
import { Link } from 'react-router-dom';

const VideoPage = () => {
    return (
        <div className="bg-transparent text-white min-h-screen">
            <main className="flex flex-col sm:flex-row sm:w-full">
                <div className="w-full sm:w-3/5 p-8">
                    <div className="flex justify-center">
                        <video
                            className='w-full'
                            src={SampleVideo}
                            controls
                            height={480}
                            width={854}
                            style={{
                                aspectRatio: "854/480",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                    </div>

                    <div className='mt-4'>
                        <h1 className="text-lg text-black font-bold">Video 1</h1>
                        <div className="flex justify-between text-black items-center text-sm">
                            <div>
                                220M views &bull; 2:21 PM
                            </div>
                            <div className="flex space-x-4">
                                <button className="bg-transparent text-black">4.2K</button>
                                <button className="bg-transparent text-black">Share</button>
                            </div>
                        </div>
                        <div className="flex border-hidden">
                            <input className="rounded-full w-[15rem]  h-6 border-0 hover:border-b-1" type="text" name="Add a Comment..." id="Comment" />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-2/5 bg-transparent p-4 sm:grid-row">
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold mb-4 text-black">Up next</h2>
                        {Data.map((video) => (
                            <div key={video.id} className="bg-transparent p-4">
                                <div className="space-y-4">
                                    <Link to={`/Video/${video.id}`} className="space-y-4">
                                        <div className="flex space-x-2 sm:flex-row">
                                            <img
                                                src={video.thumbnail}
                                                alt="Thumbnail"
                                                className='w-32'
                                                height={90}
                                                style={{
                                                    aspectRatio: "16/9",
                                                    borderRadius: "4px",
                                                }}
                                                width="160"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-black font-weight">{video.videoTitle}</p>
                                                <p className='text-xs text-black'>{video.Views} &bull;{video.Time}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VideoPage;
