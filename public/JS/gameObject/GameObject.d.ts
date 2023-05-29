declare class GameObject {
    tag: string;
    constructor();
    hasCode(): string;
    colidir(): void;
    desenhar(): void;
}
export default GameObject;
