import styled from 'styled-components'

export const VideoCard = styled.li`
  list-style-type: none;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
`

export const ChannelProfile = styled.img`
  width: 50px;
  margin-right: 10px;
  margin-top: 10px;
`
export const ChannelViewsTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const VideoName = styled.h1`
  font-size: 15px;
  color: #383838;
`

export const ChannelName = styled.h1`
  font-size: 13px;
  color: #616e7c;
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
  font-size: 50xpx;
  margin: 0px;
  font-weight: bolder;
  margin-right: 10px;
`
