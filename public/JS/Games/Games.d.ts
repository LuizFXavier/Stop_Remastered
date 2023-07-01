import GameObject from "../gameObject/GameObject";
import Interface from "../UI/Interface";
declare class Games {
    static ctx: CanvasRenderingContext2D;
    static gameObjects: GameObject[];
    static interfaces: Interface[];
    static WIDTH: number;
    static HEIGHT: number;
    static getObjectByTag(tag: string): GameObject | undefined;
    static getInterfaceByTag(tag: string): Interface | undefined;
    update(): void;
    render(): void;
    start(): void;
}
export default Games;
