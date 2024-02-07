import { Injectable } from "@angular/core";

@Injectable()
export class Fuel {

    message: string;

    constructor() {
        console.log("constructor of Fule class called");
        this.message = " petrol";
    }
}

@Injectable()
export class FuelInjector {

    val: string;

    constructor(private f: Fuel) {
        console.log("constructor of FuelInjector class called");
        this.val = "fuelInjector uses " + this.f.message;
    }

}

@Injectable()
export class Piston {

    val: string;

    constructor(private fi: FuelInjector) {
        console.log("constructor of Piston class called");
        this.val = "Piston uses " + this.fi.val;
    }


}

@Injectable()
export class Engine {

    val: string;

    constructor(private p: Piston) {
        console.log("constructor of Engine class called");
        this.val = "Engine uses " + this.p.val;
    }

    
}

@Injectable()
export class Car {

    val: string;

    constructor(private e: Engine) {
        console.log("constructor of Car class called");
        this.val = "Car runs on " + this.e.val;
    }
}