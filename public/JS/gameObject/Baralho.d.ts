import Carta from "./Carta";
import Player from "./Player";
import GameObject from "./GameObject";
declare class Baralho extends GameObject {
    cartas: Carta[];
    static widthC: number;
    static heightC: number;
    constructor();
    create(): void;
    desenhar(): void;
    colidir(): void;
    retirar(): Carta;
    embaralhar(): void;
    distribuir(player: Player): void;
}
export default Baralho;
