import Imagem from "../spriteSheet/Imagem";
import GameObject from "./GameObject";
declare class Carta extends GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    valor: number;
    naipe: string;
    imagem: Imagem | null;
    private virada;
    static naipes: string[];
    static cardsCut: Map<string, {
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    constructor(x: number, y: number, width: number, height: number, valor: number, naipe: string, imagem?: Imagem);
    desenhar(): void;
    colidir(): {
        carta: Carta;
        colidiu: boolean;
    } | {
        colidiu: boolean;
        carta?: undefined;
    };
    virar(): void;
}
export default Carta;
