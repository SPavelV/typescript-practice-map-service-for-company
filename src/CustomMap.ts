import L from 'leaflet';
import { User } from './User';
import { Company } from './Company';

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

  addUserMarker(user: User): void {
    L.circle([user.location.lat, user.location.lng], {
      color: 'red',
      fillColor: '#ff003',
      fillOpacity: 0.5,
      radius: 1000,
    }).addTo(this.map);
  }

  addCompanyMarker(company: Company): void {
    L.circle([company.location.lat, company.location.lng], {
      color: 'orange',
      fillColor: '#ffa500',
      fillOpacity: 0.5,
      radius: 1000,
    }).addTo(this.map);
  }
}
