import { ScenesManager } from './classes/ScenesManager';
import { Game } from './classes/game';
import './css/style.css';

const canvasContainer = document.createElement('div');
canvasContainer.classList.add('canvas-container');

document.body.appendChild(canvasContainer);

// create Game & add canvas to container
const game = new Game(canvasContainer);
game.setStartingScene();
