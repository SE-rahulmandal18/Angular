import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
  Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges,  } from '@angular/core';

@Component({
  selector: 'life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrl: './life-cycle-child.component.css'
})
export class LifeCycleChildComponent implements OnInit, OnChanges ,DoCheck,
 OnDestroy ,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() prop!: string;

  constructor()
  {
    console.log('[constructor fired]');
    console.log(`prop: ${this.prop}`);
    this.prop = 'TEST';
    console.log(`prop: ${this.prop}`);
  }
 
  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges fired]');
    console.log(`prop: ${this.prop}`);
    console.log('changes:',changes);
  }
  ngOnInit(){
    console.log('[OnInit fired]');
    console.log(`prop: ${this.prop}`);
  }
  
ngDoCheck() {
  console.log('[Docheck fired]');    
}

ngAfterContentInit() {
  console.log('[ngAfterContentInit fired]');
    
}

ngAfterViewInit(){
    console.log('[ngAfterViewInit fired]');
}
  
ngAfterViewChecked(){
    console.log('[ngAfterViewChecked fired]');
}
ngAfterContentChecked(){
    console.log('[ngAfterContentChecked fired]')
}

ngOnDestroy(){
    console.log('[ngOnDestroy fired]')
}
}
