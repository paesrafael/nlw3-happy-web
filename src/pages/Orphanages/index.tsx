import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { FiClock, FiInfo } from 'react-icons/fi'
import { Map, Marker, TileLayer } from 'react-leaflet'

import api from '~/services/api'

import Sidebar from '~/components/Sidebar'

import mapIcon from '~/utils/mapIcon'

import {
  Container,
  Content,
  OrphanageDetail,
  Image,
  ImagesWrapper,
  Button,
  OrphanageDetailsContent,
  Title,
  Text,
  MapContainer,
  Footer,
  Link,
  Hr,
  SubTitle,
  OpenDetails,
  Hour,
  OpenOnWeekends,
} from './styles'

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: string;
    url: string;
  }>
}

interface OrphanagesParams {
  id: string;
}

export default function Orphanages() {
  const params = useParams<OrphanagesParams>()
  const [orphanage, setOrphanage] = useState<Orphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data)
    })
  }, [params.id])

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <Sidebar />

      <Content>
        <OrphanageDetail>
          <Image
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
            className="image"
          />

          <ImagesWrapper>
            {orphanage.images.map((image, index) => {
              return (
                <Button
                  key={image.id}
                  type="button"
                  className={activeImageIndex === index ? 'active' : ''}
                  onClick={() => {
                    setActiveImageIndex(index)
                  }}
                >
                  <Image
                    src={image.url}
                    alt={orphanage.name}
                    className="image"
                  />
                </Button>
              )
            })}
          </ImagesWrapper>

          <OrphanageDetailsContent>
            <Title>{orphanage.name}</Title>
            <Text>{orphanage.about}</Text>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  position={[orphanage.latitude, orphanage.longitude]}
                  interactive={false}
                  icon={mapIcon}
                />
              </Map>

              <Footer>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </Link>
              </Footer>
            </MapContainer>

            <Hr />

            <SubTitle>Instruções para visita</SubTitle>
            <Text>{orphanage.instructions}</Text>

            <OpenDetails>
              <Hour>
                <FiClock size="32" color={`var(--icon)`} />

                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>

              { orphanage.open_on_weekends ? (
                <OpenOnWeekends>
                  <FiInfo size="32" color={`var(--icon-green)`} />

                  Atendemos <br />
                  nos finais de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends className="dont-open">
                  <FiInfo size="32" color={`var(--icon-red)`} />

                  Não atendemos <br />
                  nos finais de semana
                </OpenOnWeekends>
              )}
            </OpenDetails>

            <Button type="button" className="contact-button">
              <FaWhatsapp size="20" color={`var(--white)`} />

              Entrar em contato
            </Button>
          </OrphanageDetailsContent>
        </OrphanageDetail>
      </Content>
    </Container>
  )
}
