import React, { useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom'
import { Data } from '../Data';
import { Link } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VideoPage = () => {
    const notify = () => toast("Link copied to clipboard");
    const Alert = useCallback(() => {
        notify();
    }, []);
    const { id } = useParams();
    const videoId = parseInt(id);
    const video = useMemo(() => Data.find((video) => video.id === videoId), [videoId]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const handleClick = useCallback(() => {
        // handle click event
        // create a link to the video page
        const link = window.location.href;
        // create a hidden textarea element
        const textarea = document.createElement("textarea");
        textarea.value = link;
        document.body.appendChild(textarea);
        // select the text in the textarea
        textarea.select();
        // copy the link to the clipboard
        document.execCommand("copy");
        // remove the textarea element
        document.body.removeChild(textarea);
        // show a message to the user
        Alert();
    }, [Alert]);

    React.useEffect(() => {
        if (!video) {
            setError('Video not found');
            setIsLoading(false);
            return;
        }

        setError(null);
        setIsLoading(false);
    }, [video]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="bg-gradient-to-br from-[#f56565] to-[#0066ff] text-white min-h-screen">
            <main className="flex flex-col sm:flex-row sm:w-full">
                <div className="w-full sm:w-3/5 p-8">
                    <div className="flex justify-center">
                        <video
                            className='w-full'
                            src={video.videoSRC}
                            controls
                            height={480}
                            width={854}
                            style={{
                                aspectRatio: "854/480",
                                objectFit: "contain",
                                borderRadius: "10px",
                                backgroundColor: "black",
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
                                <button className="bg-transparent text-black" onClick={handleClick}> <FaShare />Share</button>
                            </div>
                        </div>
                        <div className="flex border-hidden">
                            <input className="rounded-full w-[15rem]  h-6 border-0 hover:border-b-1" type="text" name="Add a Comment..." id="Comment" />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-2/5 bg-transparent p-4 sm:grid-row">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold mb-4 text-black">Up next</h2>
                        {Data.map((video) => (
                            <div key={video.id} className="bg-transparent ">
                                <div className="space-y-4">
                                    <Link to={`/video/${video.id}`} className="space-y-4">
                                        <div className="flex space-x-2 sm:flex-row ">
                                            <img
                                                src={video.thumbnail}
                                                alt="Thumbnail"
                                                className='group relative h-32 w-50 overflow-hidden rounded-lg
                                                 object-cover object-center transition-transform duration-300 group-hover:scale-105 '

                                            />
                                            <div>
                                                <p className="text-base font-medium text-black font-weight">{video.videoTitle}</p>
                                                <p className='text-sm text-black'>{video.Views} &bull;{video.Time}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
};

export default VideoPage;
