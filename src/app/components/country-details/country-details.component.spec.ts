import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { CountryDetailsComponent } from './country-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

xdescribe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let countryService: CountryService;
  let httpMock: HttpClientTestingModule;
  let activRoute: ActivatedRoute;
  let loc: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CountryService, 
        {provide: ActivatedRoute, useValue: {name: 'Albania'}}, Location
      ],
    });

    countryService = TestBed.get(CountryService);
    httpMock = TestBed.get(HttpTestingController);
    activRoute = TestBed.get(ActivatedRoute);
    loc = TestBed.get(Location);
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Component- CountryDetailsComponent', async(() => {
    const fixture = TestBed.createComponent(CountryDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
