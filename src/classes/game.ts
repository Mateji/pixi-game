import * as PIXI from 'pixi.js';
import { Application, Container, Sprite } from 'pixi.js';
import { ScenesManager } from './ScenesManager';
import { Scene } from './scene';
import { StartingScene } from './startingScene';

export class Game {
    constructor(private canvasContainer: HTMLElement) {}

    setStartingScene() {
        ScenesManager.create(512, 512, this.canvasContainer);

        let startingScene = ScenesManager.createScene('startingScreen', StartingScene);

        ScenesManager.goToScene(startingScene.getName());
    }
}
