import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.css'
})
export class ContentParentComponent implements OnInit, AfterContentInit{
 
  @ContentChild(ContentChildComponent, {static : false}) cp?:
  ContentChildComponent;

  constructor() {}

  ngOnInit() {
      console.group()
      console.log('constructor-- content projector comp')
      console.log(this.cp);  // will be undefined
      console.groupEnd();
  }
  
  ngAfterContentInit() {
    console.group()
    console.log('AfterContentInit-- content projector comp')
    console.log(this.cp);  // should print content child instance
    console.groupEnd();
      
  }
}
