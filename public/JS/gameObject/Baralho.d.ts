import Carta from "./Carta";
import Player from "./Player";
import GameObject from "./GameObject";
declare class Baralho extends GameObject {
    cartas: Carta[];
    static widthC: number;
    static heightC: number;
    static cartaNula: Carta;
    constructor(tag: string);
    create(): void;
    desenhar(): void;
    update(): void;
    colidir(): boolean | undefined;
    retirar(): Carta;
    embaralhar(): void;
    distribuir(player: Player): void;
    colocar(carta: Carta): void;
}
export default Baralho;
