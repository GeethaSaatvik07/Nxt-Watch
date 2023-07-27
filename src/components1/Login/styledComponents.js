import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 30%;
  background-color: white;
  box-shadow: 0px 0px 7px 0px black;
  border-radius: 10px;
`
export const LoginImage = styled.img`
  width: 150px;
  text-align: center;
  margin-bottom: 50px;
`
export const LoginDetails = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

export const Labels = styled.label`
  font-size: 13px;
  color: #cccccc;
  margin-bottom: 5px;
`

export const Inputs = styled.input`
  width: 100%;
  border: 1px solid #94a3b8;
  outline: none;
  height: 35px;
  padding: 5px;
  color: #0f0f0f;
  border-radius: 5px;
  margin-bottom: 25px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const CheckLabel = styled.label`
  font-size: 15px;
  color: #0f0f0f;
  font-weight: bold;
`
export const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`

export const LoginButton = styled.button`
  outline: none;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 5px;
  height: 35px;
  width: 100%;
`
export const ErrorLine = styled.p`
  font-size: 16px;
  color: #ff0000;
`
