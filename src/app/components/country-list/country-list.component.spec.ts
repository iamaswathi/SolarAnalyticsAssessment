import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';

import { CountryListComponent } from './country-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from '../../services/country.service';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let countryService: CountryService;
  let httpMock: HttpClientTestingModule;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ CountryListComponent ]
  //   })
  //   .compileComponents();
  // });

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expects service to fetch list of countries',
  inject([HttpTestingController, CountryService],
    (httpMock: HttpTestingController, countryService: CountryService) => {
      
      countryService.getCountriesList().subscribe(countriesList => {
        expect(countriesList.length).toBe(3);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('https://restcountries.eu/rest/v2/all');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      // req.flush({countriesList});
    })
  );

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});
