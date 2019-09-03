//http://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums() {
  fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}
async function fetchAlbums_asyncawait() {
  var res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  var json = await res.json();

  console.log(json);
}
const fetchAlbums_Newsyntax = async () => {
  var res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  var json = await res.json();

  console.log(json);
};

fetchAlbums();
fetchAlbums_asyncawait();
fetchAlbums_Newsyntax();
