export async function getPageData(number){
  let result = await fetch('https://chinook-api.herokuapp.com/api/tracks?page=${number}');
  let data = await result.json();
  let newdata = data.data;
  return newdata;
}

export async function getPlaylistData(id){
  let result = await fetch('https://chinook-api.herokuapp.com/api/playlists/${id}');
  let data = await result.json();
  let newdata = data.data;
  return newdata;
}

export async function getAllPlaylists(){
  let result = await fetch('https://chinook-api.herokuapp.com/api/playlists');
  let data = await result.json();
  let newdata = data.data;
  return newdata;
}
