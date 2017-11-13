import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { PlacesService } from '../services/places.service';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html'

})
export class PlacesComponent {
  title = 'app';
  lat: number = 2.888180;
  long: number = -73.476563;
  results$: Observable<any>;

  private places: { id: number, name: string, description: string}[];
  private searchField: FormControl;

  constructor(private placesService: PlacesService, private http: Http) {
      this.places = this.placesService.getPlaces();
      const URL = 'https://maps.google.com/maps/api/geocode/json';
      this.searchField = new FormControl();
      this.results$ = this.searchField.valueChanges
        .debounceTime(500)
        .switchMap(query => this.http.get(`${URL}?address=${query}`))
        .map(response => response.json())
        .map(response => response.results);
  }
}
