import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import Location from '~/components/Location'

import mapMarkerImg from '~/assets/images/map-marker.svg'

import {
  Container,
  Aside,
  Header,
  Image,
  Title,
  Text,
  Footer,
  MapWrapper,
  LinkWrapper,
} from './styles'

export default function OrphanagesMap() {
  return (
    <Container>
      <Aside>
        <Header>
          <Image src={mapMarkerImg} alt="Happy marker" />

          <Title>Escolha um orfanato no mapa</Title>
          <Text>Muitas crianças estão esperando sua visita :)</Text>
        </Header>

        <Footer>
          <Location />
        </Footer>
      </Aside>

      <MapWrapper>
        <Map
          center={[-21.1785521,-47.8276578]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>
      </MapWrapper>

      <Link to="">
        <LinkWrapper>
          <FiPlus size="32" color={`var(--white)`} />
        </LinkWrapper>
      </Link>
    </Container>
  )
}
