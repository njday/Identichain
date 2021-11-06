import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCheckComponent } from './other-check.component';

describe('OtherCheckComponent', () => {
  let component: OtherCheckComponent;
  let fixture: ComponentFixture<OtherCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
