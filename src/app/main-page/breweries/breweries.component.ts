import { Component, OnInit } from '@angular/core';
import { Brewery } from '@core/breweries/breweries.model';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html'
})
export class BreweriesComponent implements OnInit {

  breweries: Brewery[] = [
    {
      id: "1",
      name: 'Brewery 1',
      brewery_type: 'micro',
      address_1: '123 Main St',
      address_2: null,
      address_3: null,
      city: 'Anytown',
      state_province: 'State',
      postal_code: '12345',
      country: 'Country',
      longitude: null,
      latitude: null,
      phone: '555-1234',
      website_url: 'http://www.brewery1.com',
      state: 'State',
      street: '123 Main St'
    },
    {
      id: "2",
      name: 'Brewery 2',
      brewery_type: 'micro',
      address_1: '123 Main St',
      address_2: null,
      address_3: null,
      city: 'Anytown',
      state_province: 'State',
      postal_code: '12345',
      country: 'Country',
      longitude: null,
      latitude: null,
      phone: '555-1234',
      website_url: 'http://www.brewery1.com',
      state: 'State',
      street: '123 Main St'
    },
  ];

  ngOnInit() {
  }

}
