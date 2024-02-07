import { Component } from '@angular/core';
import { GenerateRandom } from '../GenerateRandom';

@Component({
  selector: 'app-child1-di',
  templateUrl: './child1-di.component.html',
  styleUrl: './child1-di.component.css'
})
export class Child1DIComponent {

  result:string;
  constructor(private rnd:GenerateRandom)
  {
    console.log("construcote of child1 called");
    this.result=rnd.x;
  }
}
