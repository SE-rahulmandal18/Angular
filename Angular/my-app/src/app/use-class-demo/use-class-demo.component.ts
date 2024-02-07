import { Component } from '@angular/core';
import { ChesseHamburger, DoubleHamburger, Hamburger } from '../Hamburger';

@Component({
  selector: 'use-class-demo',
  templateUrl: './use-class-demo.component.html',
  styleUrl: './use-class-demo.component.css',
  providers: [Hamburger] // shordcut for classbased providers

  //providers:[{provide: Hamburger, useClass: Hamburger}]
  //providers:[{provide: Hamburger, useClass: DoubleHamburger}]
 // providers: [{ provide: Hamburger, useClass: ChesseHamburger }]

})
export class UseClassDemoComponent {

  result: string;
  constructor(private h: Hamburger) {
    this.result = h.type;
  }
}
