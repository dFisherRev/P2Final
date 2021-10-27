import { EventEmitter } from "@angular/core";

export class Emitters {
    static authEmmitter = new EventEmitter<boolean>();
    static cardEmitter = new EventEmitter<boolean>();
}