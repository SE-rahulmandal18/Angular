import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings-demo',
  templateUrl: './bindings-demo.component.html',
  styleUrl: './bindings-demo.component.css'
})
export class BindingsDemoComponent {

  isLoggedin:boolean=true;

  navStyle = 'font-size: 1.2rem; color: cornflowerblue';
  ClassesToApply : string = 'italicClass boldClass';

}
