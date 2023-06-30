import * as PIXI from 'pixi.js';

export class Game {
    constructor() {
        // create canvas
        let app = new PIXI.Application<HTMLCanvasElement>({ width: 1200, height: 800 });
        document.body.appendChild(app.view);

        // load sprite
        const tile = PIXI.Sprite.from('assets/platformerTile_48.png');

        tile.anchor.set(0.5);

        tile.x = app.screen.width / 2;
        tile.y = app.screen.height / 2;

        app.stage.addChild(tile);

        app.ticker.add(delta => {
            tile.rotation += 0.01 * delta;
        });
    }
}
