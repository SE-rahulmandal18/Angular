import { FactoryDemo } from '../FactoryDemo';
import { Hamburger } from './../Hamburger';
import { Component } from '@angular/core';

@Component({
  selector: 'use-factory-demo',
  templateUrl: './use-factory-demo.component.html',
  styleUrl: './use-factory-demo.component.css',
  providers:[{provide:Hamburger, useFactory: FactoryDemo}]
})
export class UseFactoryDemoComponent {
    
  result:string;
  constructor(h:Hamburger)
  {
    this.result = h.type;
  }
}
