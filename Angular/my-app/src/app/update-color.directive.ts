import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[UpdateColor]'
})
export class UpdateColorDirective {

  constructor(private el:ElementRef, private r:Renderer2) {
    // this.changecolor('red');
   }

  @HostListener('mouseenter') methodToHandleMouseEnterAction()
  {
    this.changecolor('cyan')
  }

  @HostListener('mouseleave') methodToHandleMouseLeaveAction()
  {
  this.changecolor('brown')
  }

  changecolor(clr:string)
  {
    this.r.setStyle(this.el.nativeElement,'color',clr)
  }
}
