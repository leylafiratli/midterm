import React from 'react';
import Loading from './Loading';
import PageNotFound from './PageNotFound';
import SearchForm from './SearchForm';
import TrackList from './TrackList.js';
import TrackCard from './TrackCard.js';
import PlayListMemberList from './playlistMemberList.js';
import PlaylistMember from './playlistMember.js';
import {getPageData, getAllPlaylists, getPlaylistData} from './APICall';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading : false,
      playlists: [],
      tracks: []
    };
  }

  async componentDidMount(){
    let playlists = await getAllPlaylists();
    this.setState({playlists:playlists});
  }

  handleSearch = async (searchValue) => {
    this.setState({loading:true});
    let tracks = await getPageData(searchValue);
    this.setState({loading:false, tracks:tracks});
  }

  render(){
    return (
      <Router>
      <div>
      <h1> My Music App</h1>
      <div className = "leftbar">
      <NavLink to="/api/playlists/">
      <PlayListMemberList playlists = {this.state.playlists} />
      </NavLink>
      </div>
      <div className = "library">
      <SearchForm onSearch={this.handleSearch} />
      {this.state.loading && <Loading />}
      <TrackList tracks = {this.state.tracks} />
      </div>
      </div>
      </Router>
    )
  }
}
