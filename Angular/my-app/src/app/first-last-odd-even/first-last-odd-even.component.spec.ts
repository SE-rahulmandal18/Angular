import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastOddEvenComponent } from './first-last-odd-even.component';

describe('FirstLastOddEvenComponent', () => {
  let component: FirstLastOddEvenComponent;
  let fixture: ComponentFixture<FirstLastOddEvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstLastOddEvenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstLastOddEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
