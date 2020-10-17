import Leaflet from 'leaflet'

import mapMarkerImg from '~/assets/images/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [40, 68],
  iconAnchor: [15, 68],
  popupAnchor: [145, 2],
})

export default mapIcon
