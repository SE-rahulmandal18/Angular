import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDIComponent } from './parent-di.component';

describe('ParentDIComponent', () => {
  let component: ParentDIComponent;
  let fixture: ComponentFixture<ParentDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentDIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
