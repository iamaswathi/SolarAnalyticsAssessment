import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';

import { CountryListComponent } from './country-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from '../../services/country.service';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let countryService: CountryService;
  let httpMock: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryListComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CountryService
      ],
    });

    countryService = TestBed.get(CountryService);
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create the Component- CountryListComponent', async(() => {
    const fixture = TestBed.createComponent(CountryListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit('expects service to fetch list of countries',
  inject([HttpTestingController, CountryService],
    (httpMock: HttpTestingController, countryService: CountryService) => {
      
      countryService.getCountriesList().subscribe(abc => {
        expect(abc.length).toBe(3);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('https://restcountries.eu/rest/v2/all');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      // req.flush({abc:...});
    })
  );

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});
