import { Injectable } from '@angular/core';

@Injectable()
export class GenerateRandom {
    x: string;
    constructor() {
        console.log("constructor of GenerateRandom class is called")
        this.x = Math.random().toString();
    }
}