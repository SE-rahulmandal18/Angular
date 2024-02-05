import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByDemosComponent } from './track-by-demos.component';

describe('TrackByDemosComponent', () => {
  let component: TrackByDemosComponent;
  let fixture: ComponentFixture<TrackByDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackByDemosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackByDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
