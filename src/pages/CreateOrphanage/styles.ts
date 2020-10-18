import styled, { css } from 'styled-components'

const Inputs = css`
  width: 100%;
  color: var(--legend);
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--inputs-bg);
  outline: none;
`

const Container = styled.section`
  display: flex;
`

const FormWrapper = styled.section`
  flex: 1;

  .create-orphanage-form {
    margin: 64px auto;
    padding: 64px 80px;
    width: 700px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--white);
    overflow: hidden;

    fieldset {
      border: 0;

      + fieldset {
        margin-top: 80px;
      }

      legend {
        padding-bottom: 24px;
        margin-bottom: 40px;
        width: 100%;
        color: var(--legend);
        font-size: 32px;
        font-weight: 700;
        line-height: 34px;
        border-bottom: 1px solid var(--border);
      }
    }

    .leaflet-container {
      margin-bottom: 40px;
      border: 1px solid var(--border);
      border-radius: 20px;
    }
  }
`

const Form = styled.form``

const Fieldset = styled.fieldset``

const Legend = styled.legend``

const InputBlock = styled.div``

const Label = styled.label`
  margin-bottom: 8px;
  color: var(--label);
  line-height: 24px;
  display: flex;
`

const Input = styled.input`
  padding: 0 16px;
  height: 64px;
  ${Inputs}
`

const Span = styled.span`
  margin-left: 24px;
  color: var(--label);
  font-size: 14px;
  line-height: 24px;
`

const Textarea = styled.textarea`
  padding: 16px;
  min-height: 120px;
  max-height: 240px;
  line-height: 28px;
  resize: vertical;
  ${Inputs}
`

const UploadImage = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  label {
    height: 90px;
    border: 1px dashed var(--border-dashed);
    border-radius: 20px;
    background: var(--inputs-bg);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type=file] {
    display: none;
  }
`

const Image = styled.img`
  width: 100%;
  height: 90px;
  border-radius: 20px;
  object-fit: cover;
`

const ButtonSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Button = styled.button`
  height: 64px;
  color: var(--legend);
  border: 1px solid var(--border);
  background: var(--inputs-bg);
  cursor: pointer;

  &.active {
    color: var(--active);
    border-color: var(--active-border);
    background: var(--active-bg);
  }

  &:first-child {
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  &.confirm-button {
    margin-top: 64px;
    width: 100%;
    height: 64px;
    font-weight: 800;
    border: 0;
    border-radius: 20px;
    background: var(--button-green);
    cursor: pointer;
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

export {
  Container,
  FormWrapper, Form, Fieldset, Legend, InputBlock,
  Label, Input,
  Span, Textarea, UploadImage, Image,
  ButtonSelect, Button,
}
