import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFactoryDemoComponent } from './use-factory-demo.component';

describe('UseFactoryDemoComponent', () => {
  let component: UseFactoryDemoComponent;
  let fixture: ComponentFixture<UseFactoryDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseFactoryDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseFactoryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
