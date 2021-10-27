import { AddCardResponsePileHolder } from "./addCardResponsePileHolder";
import { IPile } from "./pile";

export interface IPiles{
    dealer: AddCardResponsePileHolder;
    player: IPile;
}