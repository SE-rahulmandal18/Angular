import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDemosComponent } from './view-child-demos.component';

describe('ViewChildDemosComponent', () => {
  let component: ViewChildDemosComponent;
  let fixture: ComponentFixture<ViewChildDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildDemosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
