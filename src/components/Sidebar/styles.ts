import styled, { css } from 'styled-components'

const AsideFooter = css`
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 16px;
  background: var(--button);
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--blue-dark);
  }
`

const Container = styled.section`
  display: flex;
`

const Aside = styled.aside`
  position: fixed;
  padding: 32px 24px;
  height: 100%;
  background: linear-gradient(329.54deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const Image = styled.img`
  width: 48px;
`

const Footer = styled.footer``

const Button = styled.button`
  ${AsideFooter}
`

export {
  Container, Aside, Image,
  Footer, Button,
}
