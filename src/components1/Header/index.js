import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {withRouter, Link} from 'react-router-dom'
// import {FiSun} from 'react-icons/fi'
import {
  Navbar,
  HeaderLogo,
  LogoLogout,
  ThemeButton,
  HeaderProfile,
  LogoutButton,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <Navbar>
        <Link to="/">
          <HeaderLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
        <LogoLogout>
          <ThemeButton>
            <FaMoon />
          </ThemeButton>
          {/* <ThemeButton>
            <FiSun />
          </ThemeButton> */}
          <HeaderProfile
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <LogoutButton type="button" onClick={this.onClickLogout}>
            Logout
          </LogoutButton>
        </LogoLogout>
      </Navbar>
    )
  }
}

export default withRouter(Header)
