import { Component } from '@angular/core';
import { GenerateRandom } from '../GenerateRandom';

@Component({
  selector: 'app-child2-di',
  templateUrl: './child2-di.component.html',
  styleUrl: './child2-di.component.css',
  providers: [GenerateRandom]
})
export class Child2DIComponent {

  result:string;
  constructor(private rnd:GenerateRandom)
  {
    console.log("construcote of child1 called");
    this.result=rnd.x;
  }
}
