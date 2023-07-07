import * as PIXI from 'pixi.js';

export class Helpers {
    public static centerSprite(sprite: PIXI.Sprite, container: PIXI.ICanvas) {
        sprite.anchor.set(0.5);
        sprite.position.set(container.width / 2, container.height / 2);
    }
}
