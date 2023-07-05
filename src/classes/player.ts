import { Container, Sprite, Texture } from 'pixi.js';

export class Player extends Sprite {
    constructor(texture: Texture, x: number, y: number, rotation: number) {
        super();
        this.texture = texture;
        this.x = x;
        this.y = y;
        this.rotation = rotation;
    }

    draw(stage: Container): void {
        stage.addChild(this);
    }

    update(): void {
        // update player
    }
}
