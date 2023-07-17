import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingsComponent } from './class-bindings.component';

describe('ClassBindingsComponent', () => {
  let component: ClassBindingsComponent;
  let fixture: ComponentFixture<ClassBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassBindingsComponent]
    });
    fixture = TestBed.createComponent(ClassBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
