import Mao from "./Mao";
import Carta from "./Carta";
import GameObject from "./GameObject";
declare class Player extends GameObject {
    posx: number;
    posy: number;
    mao: Mao;
    comprada: Carta | null;
    constructor(x: number, y: number, mao: Mao);
    arrumarCartas(): void;
    desenhar(): void;
    update(): void;
    colidir(): void;
    comprar(carta: Carta): void;
    comprar2(): void;
    trocar(index: number): void;
    descartar(): void;
}
export default Player;
