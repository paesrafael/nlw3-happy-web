import React from 'react'

import {
  Container,
  Text,
} from './styles'

interface LocationProps {
  position?: string;
  text?: string;
}

export default function Location({ position, text }: LocationProps) {
  return (
    <Container position={position} text={text}>
      <Text fontWeight="800">Ribeirão Preto</Text>
      <Text>Sampa</Text>
    </Container>
  )
}
