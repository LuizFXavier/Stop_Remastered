import GameObject from "../gameObject/GameObject";
declare class Games {
    static ctx: CanvasRenderingContext2D;
    static gameObjects: GameObject[];
    static WIDTH: number;
    static HEIGHT: number;
    update(): void;
    render(): void;
    start(): void;
}
export default Games;
