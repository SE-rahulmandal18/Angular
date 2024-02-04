import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  res:string="";

   x:string="";

  generateRabdom()
  {
    this.res=Math.random().toString();
  }

  
  DataRecieved(message:string):void{
    this.x=message;
  }


}
