import styled from 'styled-components'

interface ContainerProps {
  position?: string;
  text?: string;
}

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
}

const Container = styled.section`
  position: ${(props: ContainerProps) => (props.position ? props.position : 'relative')};
  top: 0;
  right: 0;
  text-align: ${(props: ContainerProps) => (props.text ? props.text : 'left')};
  display: flex;
  flex-direction: column;
`

const Text = styled.p`
  margin: ${(props: TextProps) => (props.margin ? props.margin : '0')};
  font-size: ${(props: TextProps) => (props.fontSize ? props.fontSize : '18px')};
  font-weight: ${(props: TextProps) => (props.fontWeight ? props.fontWeight : 'normal')};
  line-height: 20px;
`

export {
  Container, Text,
}
