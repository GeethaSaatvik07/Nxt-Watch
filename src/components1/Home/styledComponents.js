import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 89vh;
  height: 100%;
  font-family: 'Roboto';
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: flex;
  padding: 20px;
  min-height: 89vh;
  height: 100%;
  width: 85%;
`

export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
`
export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerLogo = styled.img`
  width: 100px;
`

export const BannerLine = styled.p`
  font-size: 17px;
  color: #212121;
`

export const BannerButton = styled.button`
  width: 100px;
  height: 35px;
  border: 2px solid #00306e;
  font-weight: 700;
  color: #00306e;
  background-color: transparent;
`

export const BannerCloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: grey;
`
export const VideosContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  min-height: 54vh;
`
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 30%;
  height: 35px;
  padding: 5px;
  border: 1px solid #cccccc;
  outline: none;
`

export const SearchIconButton = styled.button`
  outline: none;
  border: 1px solid #cccccc;
  padding-right: 10px;
  padding-left: 10px;
  height: 35px;
  width: 60px;
  font-size: 15px;
`

export const VideoItemsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
