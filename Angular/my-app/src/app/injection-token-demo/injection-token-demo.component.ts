import { Component, Inject, InjectionToken } from '@angular/core';
import { DoubleHamburger, Hamburger } from '../Hamburger';

// name collision
//const token1:string="somekey";
//const token2:string="somekey";

const token1=new InjectionToken("somekey");
const token2=new InjectionToken("somekey");

@Component({
  selector: 'injection-token-demo',
  templateUrl: './injection-token-demo.component.html',
  styleUrl: './injection-token-demo.component.css',
  providers: [
    {provide: token1, useClass:Hamburger},
    {provide: token2, useClass:DoubleHamburger}
  ]
})
export class InjectionTokenDemoComponent {

  constructor(@Inject(token1) h1:any, @Inject(token2) h2:any)
  {
      console.log(h1);
      console.log(h2);
  }
}
