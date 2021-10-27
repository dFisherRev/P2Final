import { AddCardResponsePile } from "./addCardResponsePile";

export interface AddCardResponse{
    success: boolean;
    deck_id: string;
    remaining: number;
    piles: AddCardResponsePile
}