import * as PIXI from 'pixi.js';
import { Application, Container, Sprite } from 'pixi.js';

export class Game {
    private app: Application<HTMLCanvasElement>;

    private startingStage: Container;

    constructor() {
        // create canvas
        this.app = new Application<HTMLCanvasElement>({ width: window.innerWidth, height: window.innerHeight });
        this.app.renderer.view.style.position = 'absolute';

        let renderer = PIXI.autoDetectRenderer({
            width: 512,
            height: 512,
        });

        // create new container and add to stage
        this.startingStage = new Container();
        this.app.stage.addChild(this.startingStage);

        // add resize event listener
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    private resize(): void {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);

        // You can use the 'screen' property as the renderer visible
        // area, this is more useful than view.width/height because
        // it handles resolution
        // this.app.screen.width, this.app.screen.height
    }

    private update(): void {
        requestAnimationFrame(this.update);
        this.draw();
    }

    private draw(): void {}

    getView(): HTMLCanvasElement {
        return this.app.view;
    }
}
