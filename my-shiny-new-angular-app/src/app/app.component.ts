import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./app1.component.scss'],
  styles: [`

    //  p { color: blue; }

  `]
})
export class AppComponent {
  title = "my-shiny-new-angular-app !";
   counter = 0;
   classToSet = 'positive';


   onCounterChange(buttonType: string){
    buttonType === "INC" ? this.counter++ : this.counter--;
    this.classToSet = this.counter > 0 ? 'positive' : 'negative';
   }
}
