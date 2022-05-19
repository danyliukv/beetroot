import { showSong } from './js/song.js';
import { showModal } from './js/modal.js';
import { showTrafficLight, changeLight } from './js/traffiLight.js';

document.getElementById('js-song-button').addEventListener('click', showSong);
document.getElementById('js-modal-button').addEventListener('click', showModal);
document.getElementById('js-traffic-light-button').addEventListener('click', showTrafficLight);
document.getElementById('js-traffic-lights-button').addEventListener('click', changeLight);
