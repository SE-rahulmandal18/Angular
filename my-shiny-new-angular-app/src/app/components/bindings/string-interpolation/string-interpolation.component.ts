import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {
  message = `This is some random message`;

  getMessage() {
    console.log("This method was called!");
    return this.message;
  }
}
