import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterCountryComponent } from './search-filter-country.component';

describe('SearchFilterCountryComponent', () => {
  let component: SearchFilterCountryComponent;
  let fixture: ComponentFixture<SearchFilterCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
