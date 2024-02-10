import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitToServerComponent } from './submit-to-server.component';

describe('SubmitToServerComponent', () => {
  let component: SubmitToServerComponent;
  let fixture: ComponentFixture<SubmitToServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitToServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitToServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
