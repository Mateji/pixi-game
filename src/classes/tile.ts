import { Sprite } from 'pixi.js';

export class Tile {
    type: TileType;
    sprite: Sprite;
    constructor(type: TileType, sprite: Sprite) {
        this.type = type;
        this.sprite = sprite;
    }
}

export enum TileType {
    Empty,
    Grass,
}
