import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionTokenDemoComponent } from './injection-token-demo.component';

describe('InjectionTokenDemoComponent', () => {
  let component: InjectionTokenDemoComponent;
  let fixture: ComponentFixture<InjectionTokenDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectionTokenDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjectionTokenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
