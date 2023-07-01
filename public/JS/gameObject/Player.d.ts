import Mao from "./Mao";
import Carta from "./Carta";
import GameObject from "./GameObject";
declare class Player extends GameObject {
    posx: number;
    posy: number;
    mao: Mao;
    comprada: Carta | null;
    comprou: boolean;
    constructor(tag: string, x: number, y: number, mao: Mao);
    arrumarCartas(): void;
    desenhar(): void;
    update(): void;
    colidir(): void;
    comprar(): void;
    trocar(index: number): void;
    descartar(): void;
    cortar(index: number): void;
}
export default Player;
