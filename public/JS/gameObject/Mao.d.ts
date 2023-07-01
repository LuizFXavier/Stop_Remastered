import Carta from "./Carta";
import GameObject from "./GameObject";
import Baralho from "./Baralho";
declare class Mao extends GameObject {
    cartas: Carta[];
    desenhar(): void;
    colidir(): {
        carta: Carta | undefined;
        index: number;
    } | null;
    trocar(carta: Carta, index: number): void;
    cortar(index: number, descarte: Baralho): void;
}
export default Mao;
