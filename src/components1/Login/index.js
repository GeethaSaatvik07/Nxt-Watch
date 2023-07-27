import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginPage,
  LoginCard,
  LoginImage,
  LoginDetails,
  Labels,
  Inputs,
  CheckBoxContainer,
  CheckLabel,
  CheckBox,
  LoginButton,
  ErrorLine,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: '',
    showError: false,
    error: '',
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = event => {
    this.setState({showPassword: event.target.checked})
    // console.log()
  }

  loginSuccessful = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  loginUnsuccessful = error => {
    this.setState({showError: true, error})
  }

  OnSubmitLogin = async event => {
    event.preventDefault()
    const loginUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.loginSuccessful(data.jwt_token)
    } else {
      this.loginUnsuccessful(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showError, error} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect path="/" />
    }
    return (
      <LoginPage>
        <LoginCard>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <LoginDetails onSubmit={this.OnSubmitLogin}>
            <Labels htmlFor="name">USERNAME</Labels>
            <Inputs
              id="name"
              type="text"
              placeholder="Username"
              onChange={this.onChangeName}
              value={username}
            />
            <Labels htmlFor="password">USERNAME</Labels>
            <Inputs
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
            <CheckBoxContainer>
              <CheckBox
                type="checkbox"
                id="check"
                onChange={this.onChangeCheck}
              />
              <CheckLabel htmlFor="check">Show Password</CheckLabel>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showError && <ErrorLine>*{error}</ErrorLine>}
          </LoginDetails>
        </LoginCard>
      </LoginPage>
    )
  }
}

export default Login
