import {Injectable} from '@angular/core';

@Injectable()
export class PlacesService {

    private places = [
          { id: 1, name: 'Santa Fé de Antioquia', description: 'Santa Fé description'},
          { id: 2, name: 'La Ceja', description: 'La Ceja description'},
          { id: 3, name: 'Caldas', description: 'Caldas description'},
          { id: 4, name: 'Sabaneta', description: 'Sabaneta description'}
    ];

    public getPlaces() {
        return  this.places;
    }

    public getPlacesById(id: number) {
        return this.places.find((item) => id ===item.id);
    }
}
