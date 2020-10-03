import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetails.ComponentComponent } from './country-details.component.component';

describe('CountryDetails.ComponentComponent', () => {
  let component: CountryDetails.ComponentComponent;
  let fixture: ComponentFixture<CountryDetails.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetails.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetails.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
