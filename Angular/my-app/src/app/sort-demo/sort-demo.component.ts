import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'sort-demo',
  templateUrl: './sort-demo.component.html',
  styleUrl: './sort-demo.component.css'
})
export class SortDemoComponent {

  @ViewChild('input') inputElement!: ElementRef
  newDigit: any = 0;

  originalList: number[] = [
    2, 3, 4, 1
  ]

  pureSortableDigits: number[] = [
    2, 3, 4, 1
  ]

  impureSortableDigits: number[] = [
    2, 3, 4, 1
  ]


  addNewDigit() {
    if (this.newDigit == null)
      return

    this.originalList.push(this.newDigit)
    this.pureSortableDigits.push(this.newDigit)
    this.impureSortableDigits.push(this.newDigit)

    this.newDigit = null
    this.input.focus()
  }

  get input(): HTMLInputElement {
    return this.inputElement.nativeElement;
  }
}
