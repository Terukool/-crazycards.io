import { CardValue } from './cardValue.model';
import { CardColor } from "./cardColor.model";

export type PlayCardModel = {
    color?: CardColor;
    value: CardValue;
}