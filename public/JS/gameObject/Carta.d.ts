import Imagem from "../spriteSheet/Imagem";
declare class Carta {
    x: number;
    y: number;
    width: number;
    height: number;
    valor: number;
    naipe: string;
    imagem: Imagem;
    constructor(x: number, y: number, width: number, height: number, valor: number, naipe: string, imagem: Imagem);
    desenhar(): void;
    colidir(): void;
}
export default Carta;
