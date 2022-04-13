import L from 'leaflet';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private map: L.Map;

  constructor(mapId: string) {
    this.map = L.map(mapId).setView([0, 0], 2);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF1bGxlZTIwMjIiLCJhIjoiY2wxdWJuYjk0MDF5ZDNlbzNxZGt1b3hwZCJ9.dUzwlSwfOGP6Eq_mG_ANhg',
      {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoicGF1bGxlZTIwMjIiLCJhIjoiY2wxdWJuYjk0MDF5ZDNlbzNxZGt1b3hwZCJ9.dUzwlSwfOGP6Eq_mG_ANhg',
      }
    ).addTo(this.map);
  }

  addMarker(mappable: Mappable): void {
    const marker = L.circle([mappable.location.lat, mappable.location.lng], {
      color: 'red',
      fillColor: '#ff003',
      fillOpacity: 0.5,
      radius: 1000,
    }).addTo(this.map);

    marker.bindPopup(mappable.markerContent()).openPopup();
  }
}
