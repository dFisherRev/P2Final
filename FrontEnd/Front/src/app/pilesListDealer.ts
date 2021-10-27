import { IPilesDealer } from "./pilesDealer";

export interface IPilesListDealer{
    success: boolean;
    deck_id: string;
    remaining: number;
    piles: IPilesDealer;
}