import React from 'react';

const VideoList = (props)=>{
    return(
        <ul ClassName = 'col-md-4 list-group'>
            {props.videos.length};
        </ul>

);
};

export default VideoList;