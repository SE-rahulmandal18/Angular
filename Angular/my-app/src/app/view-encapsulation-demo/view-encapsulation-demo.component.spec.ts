import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationDemoComponent } from './view-encapsulation-demo.component';

describe('ViewEncapsulationDemoComponent', () => {
  let component: ViewEncapsulationDemoComponent;
  let fixture: ComponentFixture<ViewEncapsulationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEncapsulationDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEncapsulationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
