declare class GameObject {
    tag: string;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor();
    hasCode(): string;
    colidir(): void;
    desenhar(): void;
    update(): void;
}
export default GameObject;
