import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'view-child-demos',
  templateUrl: './view-child-demos.component.html',
  styleUrl: './view-child-demos.component.css'
})
export class ViewChildDemosComponent implements OnInit, AfterViewInit{

  @ViewChild('myDiv') vc?: ElementRef<HTMLDivElement>;
  ngOnInit() {
      console.log('attempting to access the div tag in ngOnInit',this.vc);  // undefined
  }

  ngAfterViewInit() {
      console.log('attempting to access the div tag in ngAfterViewInit', this.vc);   // div
  }

}
