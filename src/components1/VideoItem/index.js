import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  VideoCard,
  Thumbnail,
  VideoContent,
  ChannelProfile,
  ChannelViewsTime,
  VideoName,
  ChannelName,
  ViewsTime,
  Views,
  Dot,
} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const uploadedTime = formatDistanceToNow(new Date(publishedAt)).split(' ')
  const sliced = uploadedTime.slice(1)
  const time = sliced.join(' ')
  //   console.log(time)
  return (
    <Link to={`/videos/${id}`} className="video-link">
      <VideoCard>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoContent>
          <ChannelProfile src={profileImageUrl} alt="channel logo" />
          <ChannelViewsTime>
            <VideoName>{title}</VideoName>
            <ChannelName>{name}</ChannelName>
            <ViewsTime>
              <Views>{viewCount} views</Views>
              <Dot>.</Dot>
              <Views>{time}</Views>
            </ViewsTime>
          </ChannelViewsTime>
        </VideoContent>
      </VideoCard>
    </Link>
  )
}

export default VideoItem
