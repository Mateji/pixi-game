import { Container } from 'pixi.js';

export class Scene extends Container {
    private name: string = '';
    private paused: boolean = false;
    private updateCB = function () {};

    constructor() {
        super();
    }

    public onUpdate(updateCB: () => void) {
        this.updateCB = updateCB;
    }

    public update() {
        if (!this.paused) {
            this.updateCB();
        }
    }

    public pause() {
        this.paused = true;
    }

    public resume() {
        this.paused = false;
    }

    public isPaused() {
        return this.paused;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}
