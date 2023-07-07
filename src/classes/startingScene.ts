import * as PIXI from 'pixi.js';
import { Scene } from './scene';
import { Helpers } from '../helpers';
import { ScenesManager } from './ScenesManager';

export class StartingScene extends Scene {
    private welcomeText: PIXI.Text;

    constructor() {
        super();

        this.welcomeText = new PIXI.Text('Welcome to PixiJS!', { fill: 0xffffff });
        Helpers.centerSprite(this.welcomeText, ScenesManager.renderer.view);
        this.addChild(this.welcomeText);
    }

    public update() {
        super.update();
        this.welcomeText.rotation += 0.01;
    }
}
