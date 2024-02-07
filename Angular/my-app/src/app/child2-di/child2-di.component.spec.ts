import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2DIComponent } from './child2-di.component';

describe('Child2DIComponent', () => {
  let component: Child2DIComponent;
  let fixture: ComponentFixture<Child2DIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child2DIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child2DIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
