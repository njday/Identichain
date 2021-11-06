import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedCheckComponent } from './automated-check.component';

describe('PoliceCheckComponent', () => {
  let component: AutomatedCheckComponent;
  let fixture: ComponentFixture<AutomatedCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomatedCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatedCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
