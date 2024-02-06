import { Component } from '@angular/core';

@Component({
  selector: 'life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html',
  styleUrl: './life-cycle-parent.component.css'
})
export class LifeCycleParentComponent {

  status = false;
  prop = 'Hello';
}
