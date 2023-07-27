import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiHome, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  LeftSide,
  PagesList,
  PageListItem,
  PageListItemName,
  ContactContainer,
  ContactHeading,
  ContactWebsitesContainer,
  ContactWebsiteImage,
  ContactPara,
} from './styledComponents'

import './index.css'

class WebsitePages extends Component {
  render() {
    return (
      <LeftSide>
        <PagesList>
          <Link to="/" className="link">
            <PageListItem>
              <HiHome />
              <PageListItemName>Home</PageListItemName>
            </PageListItem>
          </Link>
          <Link to="/trending" className="link">
            <PageListItem>
              <HiFire />
              <PageListItemName>Trending</PageListItemName>
            </PageListItem>
          </Link>
          <Link to="/gaming" className="link">
            <PageListItem>
              <SiYoutubegaming />
              <PageListItemName>Gaming</PageListItemName>
            </PageListItem>
          </Link>
          <Link to="/saved-videos" className="link">
            <PageListItem>
              <MdPlaylistAdd />
              <PageListItemName>Saved videos</PageListItemName>
            </PageListItem>
          </Link>
        </PagesList>
        <ContactContainer>
          <ContactHeading>Contact Us</ContactHeading>
          <ContactWebsitesContainer>
            <ContactWebsiteImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ContactWebsiteImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ContactWebsiteImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </ContactWebsitesContainer>
          <ContactPara>
            Enjoy! Now to see your channels and recommendations!
          </ContactPara>
        </ContactContainer>
      </LeftSide>
    )
  }
}

export default WebsitePages
