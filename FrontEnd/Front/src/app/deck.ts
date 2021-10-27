import { ICard } from "./card";

/*theDeck is in place of the initial deal for 4 cards*/
export interface theDeck{
    success: boolean, 
    deck_id: string,
    remaining: number,
    shuffled: boolean
}