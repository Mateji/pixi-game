import * as PIXI from 'pixi.js';
import { Application, Sprite } from 'pixi.js';

export class Game {
    private app: Application<HTMLCanvasElement>;
    private tile: Sprite;
    private tile2: Sprite;

    constructor() {
        // create canvas
        this.app = new PIXI.Application<HTMLCanvasElement>({ width: window.innerWidth, height: window.innerHeight });
        document.body.appendChild(this.app.view);

        this.tile = PIXI.Sprite.from('assets/platformerTile_48.png');
        this.tile2 = PIXI.Sprite.from('assets/platformerTile_48.png');

        this.tile.anchor.set(0.5);
        this.tile2.anchor.set(0.5);

        this.app.stage.addChild(this.tile, this.tile2);

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();

        this.tile2.x = this.app.screen.width / 2 + this.tile2.width;
        this.tile2.y = this.app.screen.height / 2;

        this.tile.x = this.app.screen.width / 2;
        this.tile.y = this.app.screen.height / 2;
    }

    private resize(): void {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);

        // You can use the 'screen' property as the renderer visible
        // area, this is more useful than view.width/height because
        // it handles resolution
        // this.app.screen.width, this.app.screen.height
        this.tile.x = this.app.screen.width / 2;
        this.tile.y = this.app.screen.height / 2;
        this.tile2.x = this.app.screen.width / 2 + this.tile2.width;
        this.tile2.y = this.app.screen.height / 2;
    }
}
