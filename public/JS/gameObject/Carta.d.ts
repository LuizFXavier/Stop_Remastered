declare class Carta {
    x: number;
    y: number;
    width: number;
    height: number;
    valor: number;
    naipe: string;
    constructor(x: number, y: number, width: number, height: number, valor: number, naipe: string);
    desenhar(ctx: CanvasRenderingContext2D): void;
}
export default Carta;
