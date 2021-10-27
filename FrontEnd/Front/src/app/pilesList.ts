import { IPiles } from "./piles";

export interface IPilesList{
    success: boolean;
    deck_id: string;
    remaining: number;
    piles: IPiles;
}