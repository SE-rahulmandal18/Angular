import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterActionsComponent } from './counter-actions.component';

describe('CounterActionsComponent', () => {
  let component: CounterActionsComponent;
  let fixture: ComponentFixture<CounterActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterActionsComponent]
    });
    fixture = TestBed.createComponent(CounterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
