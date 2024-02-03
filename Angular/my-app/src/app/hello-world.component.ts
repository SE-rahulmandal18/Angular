import { Component } from "@angular/core";

@Component({
    selector:'first-cmp',
    template: `
    <h1>
    firstname is {{firstname}}
    lastname is {{lastname}}
    <h1>
    `


})




export class HelloComponent
{
    firstname:string;
    lastname:string;

    constructor()
    {
        console.log("object of hello comp is created");
        this.firstname = "Rahul";
        this.lastname = "Mandal";
    }

}