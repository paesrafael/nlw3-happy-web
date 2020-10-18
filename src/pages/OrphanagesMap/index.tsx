import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import api from '~/services/api'

import Location from '~/components/Location'

import mapMarkerImg from '~/assets/images/map-marker.svg'
import mapIcon from '~/utils/mapIcon'

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

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

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
          center={[-21.1785521, -47.8276578]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

          {orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                position={[orphanage.latitude, orphanage.longitude]}
                icon={mapIcon}
              >
                <Popup
                  closeButton={false}
                  minWidth={200}
                  maxWidth={200}
                  className="map-popup"
                >
                  {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size="20" color={`var(--white)`} />
                  </Link>
                </Popup>
              </Marker>
            )
          })}
        </Map>
      </MapWrapper>

      <Link to="/orphanages/create">
        <LinkWrapper>
          <FiPlus size="32" color={`var(--white)`} />
        </LinkWrapper>
      </Link>
    </Container>
  )
}
