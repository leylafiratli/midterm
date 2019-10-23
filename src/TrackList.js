import React from 'react';
import TrackCard from './TrackCard';

export default function TrackList(props){
  let tracks = props.tracks;
  return (
    <div>
    {tracks.map((track) =>
    {return <TrackCard track={track} key={track.id}/>})}
    </div>
  );
}
