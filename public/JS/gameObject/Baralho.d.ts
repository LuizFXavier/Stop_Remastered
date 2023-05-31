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
    update(): void;
    colidir(): boolean;
    retirar(): Carta;
    embaralhar(): void;
    distribuir(player: Player): void;
    colocar(carta: Carta): void;
}
export default Baralho;
