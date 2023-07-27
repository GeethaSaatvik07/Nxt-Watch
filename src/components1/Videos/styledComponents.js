import styled from 'styled-components'

export const VideoPage = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-between;
  min-height: 89vh;
  height: 100%;
  font-family: 'Roboto';
`

export const VideoSide = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  width: 85%;
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.h1`
  font-size: 25px;
  color: #383838;
  margin-bottom: 0px;
`

export const ViewsLikeShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0px;
`

export const ViewsTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 13px;
  color: #616e7c;
`

export const Views = styled.p`
  font-size: 13px;
  color: #616e7c;
  margin-right: 10px;
`
export const Dot = styled.p`
  font-size: 25px;
  font-weight: bolder;
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 12px;
`
export const ChannelProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
`

export const ChannelProfile = styled.img`
  width: 50px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.h1`
  font-size: 20px;
  color: #f1f1f1;
`

export const ChannelSubscribers = styled.p`
  font-size: 15px;
  color: #616e7c;
`

export const VideoDescription = styled.p`
  font-size: 18px;
  color: #616e7c;
`
export const LikeDislikeShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`

export const Like = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
//   color: #64748b;
color: ${props => (props.liked ? '#2563eb' : '#64748b')}
  font-size: 15px;
  border: none;
  outline: none;
  background-color: transparent;
`
export const LikeDislikeShareNames = styled.p`
  font-size: 15px;
  margin-left: 5px;
`

export const Dislike = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
//   color: #64748b;
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')}
  font-size: 15px;
  border: none;
  outline: none;
  background-color: transparent;
`

export const Share = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #64748b;
  font-size: 15px;
  border: none;
  outline: none;
  background-color: transparent;
`
