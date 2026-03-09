import { Component, OnInit } from '@angular/core';
import { BreweriesComponent } from "./breweries/breweries.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  imports: [BreweriesComponent]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
