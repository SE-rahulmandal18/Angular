import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
   message = `Bound via Property Binding`;

   constructor() {}

   ngOnInit() {}

   getMessage() {
    console.log("This method was called!");
    return this.message;
  }
}
