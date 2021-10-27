import { ICard } from "./card";

export interface IPile {
    remaining: number;
    cards: ICard[];
}