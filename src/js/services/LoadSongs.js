const songsApi = `../data/songs.js`;

export function getSongs(artist, title) {
  return new Promise((resolve, reject) => {
    return fetch(`${songsApi}/${artist}/${title}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return new Error("Something went wrong !");
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}
