import React from 'react';

export default function PlaylistMember(props){
  let playlist = props.playlist;
  return(
    <div className="playlistMember">
    <p>{playlist.attributes.name}</p>
    </div>
  );
}
