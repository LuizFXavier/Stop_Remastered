import Mao from "./Mao";
import Carta from "./Carta";
import GameObject from "./GameObject";
declare class Player extends GameObject {
    x: number;
    y: number;
    mao: Mao;
    comprada: Carta | null;
    constructor(x: number, y: number, mao: Mao);
    arrumarCartas(): void;
    desenhar(): void;
    colidir(): void;
    comprar(carta: Carta): void;
    trocar(index: number): void;
}
export default Player;
