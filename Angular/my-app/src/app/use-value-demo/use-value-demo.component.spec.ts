import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseValueDemoComponent } from './use-value-demo.component';

describe('UseValueDemoComponent', () => {
  let component: UseValueDemoComponent;
  let fixture: ComponentFixture<UseValueDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseValueDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseValueDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
