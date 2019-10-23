import React from 'react';
import PlaylistMember from './playlistMember';

export default function PlayListMemberList(props){
  let playlists = props.playlists;
  return playlists.map(playlist => {
    return<PlaylistMember playlist={playlist} key={playlist.id} />;
 });

}
