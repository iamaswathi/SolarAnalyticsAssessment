import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryList.ComponentComponent } from './country-list.component.component';

describe('CountryList.ComponentComponent', () => {
  let component: CountryList.ComponentComponent;
  let fixture: ComponentFixture<CountryList.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryList.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryList.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
