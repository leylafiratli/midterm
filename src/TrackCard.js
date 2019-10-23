import React from 'react';

export default function TrackCard(props){
  let track = props.track;
  return(
    <div>
    <p>{track.attributes.name}</p>
    <p>{track.attributes.milliseconds}</p>
    </div>
  );
}
