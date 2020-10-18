import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

import api from '~/services/api'

import Sidebar from '~/components/Sidebar'

import mapIcon from '~/utils/mapIcon'

import {
  Container,
  FormWrapper,
  Form,
  Fieldset,
  Legend,
  InputBlock,
  Label,
  Input,
  Span,
  Textarea,
  UploadImage,
  Image,
  ButtonSelect,
  Button,
} from './styles'

export default function CreateOrphanage() {
  const history = useHistory()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [openOnWeekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng,
    })
  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { latitude, longitude } = position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', openingHours)
    data.append('open_on_weekends', String(openOnWeekends))

    images.forEach(image => {
      data.append('images', image)
    })

    await api.post('orphanages', data)

    alert('Cadastro realizado!')

    history.push('/app')
  }

  return (
    <Container>
      <Sidebar />

      <FormWrapper>
        <Form className="create-orphanage-form" onSubmit={handleSubmit}>
          <Fieldset>
            <Legend>Dados</Legend>

            <Map
              center={[-21.1785521, -47.8276578]}
              zoom={13}
              style={{ width: '100%', height: 280 }}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  position={[
                    position.latitude,
                    position.longitude,
                  ]}
                  icon={mapIcon}
                  interactive={false}
                />
              )}
            </Map>

            <InputBlock>
              <Label htmlFor="name">Nome</Label>

              <Input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="about">
                Sobre
                <Span>Máximo de 300 caracteres</Span>
              </Label>

              <Textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="images">Fotos</Label>

              <UploadImage>
                {previewImages.map((image, index) => {
                  return (
                    <Image key={index} src={image} alt={name} />
                  )
                })}

                <Label htmlFor="image[]">
                  <FiPlus size="24" color={`var(--icon)`} />
                </Label>

                <Input
                  type="file"
                  id="image[]"
                  multiple
                  onChange={handleSelectImage}
                />
              </UploadImage>
            </InputBlock>
          </Fieldset>

          <Fieldset>
            <Legend>Visitação</Legend>

            <InputBlock>
              <Label htmlFor="instructions">Instruções</Label>

              <Textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="opening-hours">Horário de funcionamento</Label>

              <Input
                id="opening-hours"
                value={openingHours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <Label htmlFor="open-on-weekends">Atende fim de semana</Label>

              <ButtonSelect>
                <Button
                  type="button"
                  className={openOnWeekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </Button>

                <Button
                  type="button"
                  className={!openOnWeekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </Button>
              </ButtonSelect>
            </InputBlock>
          </Fieldset>

          <Button
            className="confirm-button"
            type="submit"
          >Confirmar</Button>
        </Form>
      </FormWrapper>
    </Container>
  )
}
