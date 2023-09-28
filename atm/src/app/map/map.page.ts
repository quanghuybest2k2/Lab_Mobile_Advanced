import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map') mapContainer!: ElementRef;
  map: any;
  latitude: number = 0;
  longitude: number = 0;

  constructor() {
    this.mapContainer = {} as ElementRef;
  }

  ngOnInit() {
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;

    this.loadMap();
  }

  loadMap() {
    this.map = L.map(this.mapContainer.nativeElement).setView(
      [this.latitude, this.longitude],
      13
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([this.latitude, this.longitude])
      .addTo(this.map)
      .bindPopup('Vị trí của bạn')
      .openPopup();
  }
}
