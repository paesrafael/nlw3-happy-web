import React from 'react'
import { useHistory } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import mapMarkerImg from '~/assets/images/map-marker.svg'

import {
  Container,
  Aside,
  Image,
  Footer,
  Button,
} from './styles'

export default function Sidebar() {
  const { goBack } = useHistory()

  return (
    <Container>
      <Aside>
        <Image src={mapMarkerImg} alt="Happy marker" />

        <Footer>
          <Button onClick={goBack}>
            <FiArrowLeft size="24" color={`var(--white)`} />
          </Button>
        </Footer>
      </Aside>
    </Container>
  )
}
