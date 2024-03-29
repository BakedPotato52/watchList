import React from 'react';
import Data from '../Data';

const video_options = {
    controls: true,
    autoplay: false,
    videoOptions: {
        // video options
    },
};

class VideoPage extends React.Component {
    state = {
        data: {},
        isPlaying: false,
    };

    componentDidMount() {
        const { match } = this.props;
        const data = Data[match.params.id] || {};
        this.setState({ data });
    }

    playVideo = () => {
        const player = this.player.player;
        if (!this.state.isPlaying) {
            player.play();
            this.setState({ isPlaying: true });
        } else {
            player.pause();
            this.setState({ isPlaying: false });
        }
    };

    onReady = (player) => {
        console.log("onReady", player);
        this.player = player;
    };

    render() {
        const { data, isPlaying } = this.state;

        return (
            <div className="page">
                <div className="videodiv">
                    <video
                        ref={(ref) => {
                            this.player = ref;
                            if (ref && ref.current) {
                                // Access video player methods here
                                console.log("Video element ready:", ref.current);
                            }
                        }}
                        src={data.src}
                        options={video_options}
                    ></video>
                    <div className="btns">
                        <button onClick={this.playVideo}>
                            {isPlaying ? "Pause" : "Play"}</button>
                        <a href="/" ><i className="fa fa-heart"></i></a>
                        <a href="/"><i className="fa fa-share"></i></a>
                    </div>
                </div>
                <div className="infodiv">
                    <h1>{data.title}</h1>
                    <p>{data.author}</p>
                    <p>{data.time}</p>
                    <p>{data.views}+</p>
                </div>
            </div >
        );
    }
}
export default VideoPage;