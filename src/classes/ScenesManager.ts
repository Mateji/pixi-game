import { IRenderer, autoDetectRenderer } from 'pixi.js';
import { Scene } from './scene';

export class ScenesManager {
    private static scenes: any = {};
    public static currentScene: Scene;
    public static renderer: IRenderer;

    public static create(width: number, height: number) {
        if (ScenesManager.renderer) {
            return this;
        }

        ScenesManager.renderer = autoDetectRenderer({ width, height });
        requestAnimationFrame(ScenesManager.loop);
        return this;
    }

    public static loop() {
        requestAnimationFrame(function () {
            ScenesManager.loop();
        });

        if (!this.currentScene || this.currentScene.isPaused()) {
            return;
        }

        this.currentScene.update();
        ScenesManager.renderer.render(this.currentScene);
    }

    public static createScene(name: string): Scene | undefined {
        if (ScenesManager.scenes[name]) {
            return;
        }

        let scene = new Scene();
        ScenesManager.scenes[name] = scene;

        return scene;
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
}
