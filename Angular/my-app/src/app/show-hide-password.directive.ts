import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ShowHidePassword]'
})
export class ShowHidePasswordDirective {

  private _show = false;

  constructor(private el: ElementRef) {
    this.setup();
   }

   toggele(span: HTMLElement) {
    this._show = !this._show;
    if (this._show) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = 'Hide password';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = 'Show password';
    }
   }

   setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = `show password`;
    span.addEventListener('click', (event) =>{
      this.toggele(span);
    });
    parent.appendChild(span);
   }
 }
