let playList = [
  { author: 'LED ZEPPELIN', song: 'STAIRWAY TO HEAVEN' },
  { author: 'QUEEN', song: 'BOHEMIAN RHAPSODY' },
  { author: 'LYNYRD SKYNYRD', song: 'FREE BIRD' },
  { author: 'DEEP PURPLE', song: 'SMOKE ON THE WATER' },
  { author: 'JIMI HENDRIX', song: 'ALL ALONG THE WATCHTOWER' },
  { author: 'AC/DC', song: 'BACK IN BLACK' },
  { author: 'QUEEN', song: 'WE WILL ROCK YOU' },
  { author: 'METALLICA', song: 'ENTER SANDMAN' },
];

const showSong = (e) => {
  document.getElementById('js-song').classList.toggle('show');
  if (!document.querySelector('li')) {
    playList.forEach((element) => {
      let li = document.createElement('li');
      li.innerHTML = element.song;
      document.getElementById('js-song-list').appendChild(li);
    });
  }
};

export { showSong };
