import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Para,
  Warning,
  InputElement,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputText, setInput] = useState('')
  const text = inputText.length

  const onChangeInput = event => {
    setInput(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>PassWord Validator</Heading>
        <Para>Check How strong your Password is </Para>
        <InputElement type="text" onChange={onChangeInput} />
        {text < 8 ? (
          <Warning>your password must be atleast 8 characters</Warning>
        ) : null}
      </PasswordContainer>
    </MainContainer>
  )
}
export default PasswordValidator
