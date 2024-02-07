import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseClassDemoComponent } from './use-class-demo.component';

describe('UseClassDemoComponent', () => {
  let component: UseClassDemoComponent;
  let fixture: ComponentFixture<UseClassDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseClassDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseClassDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
