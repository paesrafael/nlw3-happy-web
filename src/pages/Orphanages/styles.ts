import styled from 'styled-components'

const Container = styled.section`
  min-height: 100vh;
  display: flex;
`

const Content = styled.main`
  flex: 1;
`

const OrphanageDetail = styled.div`
  margin: 64px auto;
  width: 700px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--white);
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const ImagesWrapper = styled.div`
  margin: 16px 40px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;
`

const Button = styled.button`
  height: 88px;
  border: 0;
  border-radius: 20px;
  background: none;
  overflow: hidden;
  outline: none;
  opacity: 0.6;
  cursor: pointer;

  &.active {
    opacity: 1;
  }

  .image {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }

  &.contact-button {
    margin-top: 64px;
    width: 100%;
    height: 64px;
    color: var(--white);
    font-weight: 800;
    border: 0;
    background: var(--button-green);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

    &:hover {
      background: var(--button-green-hover);
    }

    svg {
      margin-right: 16px;
    }
  }
`

const OrphanageDetailsContent = styled.div`
  padding: 80px;
`

const Title = styled.h1`
  margin-bottom: 8px;
  color: var(--title);
  font-size: 54px;
  line-height: 54px;
`

const Text = styled.p`
  margin-top: 24px;
  color: var(--legend);
  line-height: 28px;
`

const MapContainer = styled.div`
  margin-top: 64px;
  border: 1px solid var(--map-border);
  border-radius: 20px;
  background: var(--map-bg);

  .leaflet-container {
    border-bottom: 1px solid var(--leaflet-border);
    border-radius: 20px;
  }
`

const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;
`

const Link = styled.a`
  color: var(--cyan-dark);
  line-height: 24px;
`

const Hr = styled.hr`
  margin: 64px 0;
  width: 100%;
  height: 1px;
  border: 0;
  background: var(--hr-border);
`

const SubTitle = styled.h2`
  color: var(--title);
  font-size: 36px;
  line-height: 46px;
`

const OpenDetails = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  div {
    padding: 32px 24px;
    line-height: 28px;
    border-radius: 20px;

    svg {
      margin-bottom: 20px;
      display: block;
    }
  }
`

const Hour = styled.div`
  color: var(--legend);
  border: 1px solid var(--map-border);
  background: linear-gradient(149.97deg, var(--map-bg) 8.13%, var(--white) 92.67%);
`

const OpenOnWeekends = styled.div`
  color: var(--active);
  border: 1px solid var(--active-border);
  background: linear-gradient(149.97deg, var(--active-bg) 8.13%, var(--white) 92.67%);

  &.dont-open {
    color: var(--icon-red);
    border-color: var(--dont-open-border);
    background: linear-gradient(149.97deg, var(--dont-open-bg) 8.13%, var(--white) 92.67%);
  }
`

export {
  Container, Content,
  OrphanageDetail,
  Image, ImagesWrapper,
  Button,
  OrphanageDetailsContent,
  Title, Text,
  MapContainer,
  Footer, Link, Hr,
  SubTitle,
  OpenDetails,
  Hour,
  OpenOnWeekends,
}
