
import { Component, OnInit } from '@angular/core';
import { Car } from './Car';

@Component({
    selector: 'my-car-comp',
    template: `
    
    <h1> {{ res }} </h1>
    
    
    `
})

export class MyCarComponent implements OnInit {
    
    res:string;

    constructor(private c:Car) 
    {
       this.res =c.val;
     }

    ngOnInit() { }
}