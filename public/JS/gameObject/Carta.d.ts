import Imagem from "../spriteSheet/Imagem";
declare class Carta {
    x: number;
    y: number;
    width: number;
    height: number;
    valor: number;
    naipe: string;
    imagem: Imagem;
    private virada;
    static naipes: string[];
    static cardsCut: Map<string, {
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    constructor(x: number, y: number, width: number, height: number, valor: number, naipe: string, imagem: Imagem);
    desenhar(): void;
    colidir(): void;
    virar(): void;
}
export default Carta;
