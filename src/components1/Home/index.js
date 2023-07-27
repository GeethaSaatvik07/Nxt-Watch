import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import {
  HomePage,
  RightSide,
  HomeBanner,
  BannerDetails,
  BannerLogo,
  BannerLine,
  BannerButton,
  BannerCloseButton,
  VideosContainer,
  SearchBar,
  SearchInput,
  SearchIconButton,
  VideoItemsList,
} from './styledComponents'

import Header from '../Header'
import WebsitePages from '../WebsitePages'
import VideoItem from '../VideoItem'

class Home extends Component {
  state = {showBanner: true, search: '', homeVideosList: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {search} = this.state
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${search}`,
      options,
    )
    const data = await response.json()
    // console.log(data)
    if (response.ok) {
      const newVideosList = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      // console.log(newVideosList)
      this.setState({homeVideosList: newVideosList})
    }
  }

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  renderBanner = () => (
    <HomeBanner>
      <BannerDetails>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <BannerLine>
          Buy Nxt Watch Premium prepaid plans with <br />
          UPI
        </BannerLine>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerDetails>
      <BannerCloseButton type="button" onClick={this.onClickCloseBanner}>
        <AiOutlineClose />
      </BannerCloseButton>
    </HomeBanner>
  )

  renderSearchBar = () => {
    const {search} = this.state
    return (
      <SearchBar>
        <SearchInput
          type="search"
          onChange={this.onChangeSearchInput}
          placeholder="Search"
          value={search}
        />
        <SearchIconButton type="button" onClick={this.onClickSearch}>
          <AiOutlineSearch />
        </SearchIconButton>
      </SearchBar>
    )
  }

  render() {
    const {showBanner, homeVideosList} = this.state
    console.log(homeVideosList)
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect path="/login" />
    }
    return (
      <>
        <Header />
        <HomePage>
          <WebsitePages />
          <RightSide>
            {showBanner && this.renderBanner()}
            <VideosContainer>
              {this.renderSearchBar()}
              <VideoItemsList>
                {homeVideosList.map(eachVideo => (
                  <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </VideoItemsList>
            </VideosContainer>
          </RightSide>
        </HomePage>
      </>
    )
  }
}

export default Home
