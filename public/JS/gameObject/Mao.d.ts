import Carta from "./Carta";
import GameObject from "./GameObject";
declare class Mao extends GameObject {
    cartas: Carta[];
    desenhar(): void;
    colidir(): {
        carta: Carta | undefined;
        index: number;
    } | null;
    trocar(carta: Carta, index: number): void;
}
export default Mao;
