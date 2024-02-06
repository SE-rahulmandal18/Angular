import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'view-encapsulation-demo',
  templateUrl: './view-encapsulation-demo.component.html',
  styleUrl: './view-encapsulation-demo.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationDemoComponent {

}
