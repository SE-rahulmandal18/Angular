import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  tod=new Date();

  str1:string="hello";
  str2:string="WORLD";

  myNum: number = 12.638467846;
  x: number = 0.5;

  message:string="hello there, how are you"


}
