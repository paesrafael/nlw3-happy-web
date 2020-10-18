import styled from 'styled-components'

const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const Aside = styled.aside`
  padding: 80px;
  width: 440px;
  background: linear-gradient(329.54deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Header = styled.header``

const Image = styled.img``

const Title = styled.h2`
  margin-top: 64px;
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
`

const Text = styled.p`
  margin-top: 28px;
  line-height: 28px;
`

const Footer = styled.footer``

const MapWrapper = styled.section`
  width: 100vw;
  height: 100vh;

  .leaflet-container {
    z-index: 9;
  }

  .map-popup .leaflet-popup-content {
    margin: 5px 10px;
    color: var(--cyan-dark);
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--blue-light);
    box-shadow: 17.2868px 27.6589px 41.4884px var(--cyan-medium-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }

  .map-popup .leaflet-popup-content-wrapper {
    border-radius: 20px;
    background: var(--white-light);
    box-shadow: none;
  }
`

const LinkWrapper = styled.a`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 64px;
  height: 64px;
  background: var(--blue-light);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  z-index: 10;

  &:hover {
    background: var(--blue-dark);
  }
`

export {
  Container, Aside, Header,
  Image, Title, Text,
  Footer, MapWrapper, LinkWrapper,
}
