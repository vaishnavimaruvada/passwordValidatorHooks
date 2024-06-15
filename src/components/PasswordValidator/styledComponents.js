import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-color: black;
`
export const PasswordContainer = styled.div`
  height: 300px;
  width: 450px;
  background-color: #383a4e;
  box-shadow: #434451;
  border-radius: 10px;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  color: white;
  text-align: center;
`
export const Para = styled.p`
  color: white;
  text-align: center;
`
export const Warning = styled.p`
  color: red;
  text-align: center;
`
export const InputElement = styled.input`
  height: 30px;
  width: 300px;

  background-color: white;
  border-radius: 5px;
  border-width: 0px;
  justify-content: center;
  display: flex;
  align-self: center;
`
