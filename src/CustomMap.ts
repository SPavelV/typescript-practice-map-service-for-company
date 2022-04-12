import L from 'leaflet';

export class CustomMap {
  private map: L.Map;

  constructor(mapId: string) {
    this.map = L.map(mapId).setView([51.505, -0.09], 13);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF1bGxlZTIwMjIiLCJhIjoiY2wxdWJuYjk0MDF5ZDNlbzNxZGt1b3hwZCJ9.dUzwlSwfOGP6Eq_mG_ANhg',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token',
      }
    ).addTo(this.map);
  }
}

// accessToken:  pk.eyJ1IjoicGF1bGxlZTIwMjIiLCJhIjoiY2wxdWJuYjk0MDF5ZDNlbzNxZGt1b3hwZCJ9.dUzwlSwfOGP6Eq_mG_ANhg
