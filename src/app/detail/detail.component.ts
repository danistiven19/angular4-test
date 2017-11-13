import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from './../services/places.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'

})
export class DetailComponent {
    private place: any;

    constructor(private route: ActivatedRoute, private placesService: PlacesService) {
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['test']);
        console.log(this.route.snapshot.queryParams['description']);
        this.place = this.placesService.getPlacesById(+this.route.snapshot.params['id']);
    }
}
