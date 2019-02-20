import { Injectable } from '@angular/core';
import { Marker } from '@ionic-native/google-maps/ngx';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  mapState: {
    currentLocationMarker: Marker
  };

  constructor() {
  }
}
