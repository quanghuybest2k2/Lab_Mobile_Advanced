import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: any;

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const coordinates = await Geolocation.getCurrentPosition();
    const latLng = new google.maps.LatLng(
      coordinates.coords.latitude,
      coordinates.coords.longitude
    );

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Vị trí hiện tại',
    });
  }
}
