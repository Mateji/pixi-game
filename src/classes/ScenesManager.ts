import { IRenderer, autoDetectRenderer } from 'pixi.js';
import { Scene } from './scene';

export class ScenesManager {
    private static scenes: any = {};
    public static currentScene: Scene;
    public static renderer: IRenderer;

    public static create(width: number, height: number, canvasContainer: HTMLElement) {
        if (ScenesManager.renderer) {
            return this;
        }

        ScenesManager.renderer = autoDetectRenderer({ width, height });
        canvasContainer.appendChild(<HTMLCanvasElement>ScenesManager.renderer.view);
        requestAnimationFrame(ScenesManager.loop.bind(this));
        return this;
    }

    public static createScene(name: string, TScene: new () => Scene = Scene): Scene {
        if (ScenesManager.scenes[name]) {
            return ScenesManager.scenes[name];
        }

        var scene = new TScene();
        scene.setName(name);

        ScenesManager.scenes[name] = scene;

        return scene;
    }

    public static getScene(name: string): Scene | undefined {
        return ScenesManager.scenes[name];
    }

    public static goToScene(name: string): boolean {
        if (ScenesManager.scenes[name]) {
            if (ScenesManager.currentScene) {
                ScenesManager.currentScene.pause();
            }

            ScenesManager.currentScene = ScenesManager.scenes[name];
            ScenesManager.currentScene.resume();

            return true;
        }
        return false;
    }

    private static loop() {
        requestAnimationFrame(ScenesManager.loop.bind(this));

        if (!this.currentScene || this.currentScene.isPaused()) {
            return;
        }

        this.currentScene.update();
        ScenesManager.renderer.render(this.currentScene);
    }
}
