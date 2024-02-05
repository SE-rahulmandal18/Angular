import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForIfComponent } from './for-if.component';

describe('ForIfComponent', () => {
  let component: ForIfComponent;
  let fixture: ComponentFixture<ForIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
