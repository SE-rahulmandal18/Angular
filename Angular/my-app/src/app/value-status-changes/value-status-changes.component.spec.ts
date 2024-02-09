import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueStatusChangesComponent } from './value-status-changes.component';

describe('ValueStatusChangesComponent', () => {
  let component: ValueStatusChangesComponent;
  let fixture: ComponentFixture<ValueStatusChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValueStatusChangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueStatusChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
