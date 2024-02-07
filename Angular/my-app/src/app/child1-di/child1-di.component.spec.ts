import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1DIComponent } from './child1-di.component';

describe('Child1DIComponent', () => {
  let component: Child1DIComponent;
  let fixture: ComponentFixture<Child1DIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child1DIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child1DIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
