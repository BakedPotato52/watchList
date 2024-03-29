import React from 'react';
import ReactPlayer from 'react-player';


export default function SampleVideos() {
    return <ReactPlayer
        url='https://youtube.com/shorts/f9NNDgbVUOM?si=2RB1k6uvL9BDZPma'
        controls
        width={450}
        height={255}
        onBuffer={() => console.log('buffering')}
        onError={e => console.log('error', e)}
        onReady={() => console.log('ready')}
        light={true}
    />

        ;
}