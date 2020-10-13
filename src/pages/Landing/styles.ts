import styled from 'styled-components'

import childrenImage from '~/assets/images/landing.svg'

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
}

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  max-height: 680px;
  background: url(${childrenImage}) no-repeat 80% center;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const Image = styled.img``

const Content = styled.div`
  max-width: 358px;
`

const Title = styled.h1`
  margin-top: 40%;
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`

const Text = styled.p`
  margin: ${(props: TextProps) => (props.margin ? props.margin : '0')};
  font-size: ${(props: TextProps) => (props.fontSize ? props.fontSize : '18px')};
  font-weight: ${(props: TextProps) => (props.fontWeight ? props.fontWeight : 'normal')};
  line-height: 34px;
`

const LinkWrapper = styled.a`
  position: absolute;
  right: 0;
  bottom: 15%;
  width: 80px;
  height: 80px;
  background: var(--yellow);
  border-radius: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background: var(--cyan-light);
  }
`

export {
  Container, Wrapper, Image,
  Content, Title, Text,
  LinkWrapper,
}
