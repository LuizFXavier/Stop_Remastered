declare class Imagem {
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;
    constructor(coord: {
        x: number;
        y: number;
        width: number;
        height: number;
    }, url: string);
    desenhar(x: number, y: number, width: number, height: number): void;
}
export default Imagem;
