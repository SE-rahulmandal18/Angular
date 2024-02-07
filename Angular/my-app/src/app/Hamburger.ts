import { Injectable } from '@angular/core';

@Injectable()
export class Hamburger 
{

    type:string;
    constructor()
    {
        console.log("constructor of Hamburger class called ");
        this.type="Hamburger";
    }
}


@Injectable()
export class DoubleHamburger extends Hamburger 
{
    constructor()
    {
        super();
        console.log("constructor of DoubleHamburger class called ");
        this.type="DoubleHamburger";
    }
}


@Injectable()
export class ChesseHamburger extends DoubleHamburger 
{
    constructor()
    {
        super();
        console.log("constructor of ChesseHamburger class called ");
        this.type="ChesseHamburger";
    }
}