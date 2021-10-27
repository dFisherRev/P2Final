import { AddCardResponsePileHolder } from "./addCardResponsePileHolder";
import { IPile } from "./pile";

export interface IPilesDealer{
    dealer: IPile;
    player: AddCardResponsePileHolder;
}