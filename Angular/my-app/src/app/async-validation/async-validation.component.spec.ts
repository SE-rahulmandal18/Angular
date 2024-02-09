import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidationComponent } from './async-validation.component';

describe('AsyncValidationComponent', () => {
  let component: AsyncValidationComponent;
  let fixture: ComponentFixture<AsyncValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
