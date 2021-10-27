import { IImage } from "./image";

export interface ICard{
    code: string;
    image: string;
    images: IImage;
    value: string;
    suit: string;
}