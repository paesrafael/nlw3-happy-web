import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import Location from '~/components/Location'

import logoImg from '~/assets/images/logo.svg'

import {
  Container,
  Wrapper,
  Image,
  Content,
  Title,
  Text,
  LinkWrapper,
} from './styles'

export default function Landing() {
  return (
    <Container>
      <Wrapper>
        <Image src={logoImg} alt="Happy" />

        <Content>
          <Title>Leve felicidade para o mundo</Title>
          <Text margin="20px 0 0 0" fontSize="24px">Visite orfanatos e mude o dia de muitas crianças.</Text>
        </Content>

        <Location position="absolute" text="right" />

        <Link to="/app">
          <LinkWrapper>
            <FiArrowRight size="26" color={`var(--black-light)`} />
          </LinkWrapper>
        </Link>
      </Wrapper>
    </Container>
  )
}
