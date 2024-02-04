import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingDemoComponent } from './attribute-binding-demo.component';

describe('AttributeBindingDemoComponent', () => {
  let component: AttributeBindingDemoComponent;
  let fixture: ComponentFixture<AttributeBindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeBindingDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
