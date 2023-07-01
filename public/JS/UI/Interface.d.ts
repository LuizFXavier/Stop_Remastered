declare class Interface {
    tag: string;
    visivel: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(tag: string, x: number, y: number, width: number, height: number);
    desenhar(): void;
    update(): void;
}
export default Interface;
