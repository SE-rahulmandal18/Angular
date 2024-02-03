import { Component } from '@angular/core';

@Component({
  selector: 'event-binding-demo',
  templateUrl: './event-binding-demo.component.html',
  styleUrl: './event-binding-demo.component.css'
})
export class EventBindingDemoComponent {

  dt:string="";

  firstName:string="Tom";

  notifyMe()
  {
    alert("Alert !")
  }

  displayDate()
  {
    this.dt=new Date().toString();
  }

  handleEvent(arg:any)
  {
    console.log(arg);
  }

}
