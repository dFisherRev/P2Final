import { ICard } from "./card";


export interface IDrawResponse{
    success: boolean;
    cards: ICard[];
    deck_id: string;
    remaining: number;
}