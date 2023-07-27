import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  VideoPage,
  VideoSide,
  VideoTitle,
  ViewsLikeShare,
  ViewsTime,
  Views,
  Dot,
  LikeDislikeShare,
  Like,
  LikeDislikeShareNames,
  Dislike,
  Share,
  ChannelProfileDetails,
  ChannelProfile,
  ChannelDetails,
  ChannelName,
  ChannelSubscribers,
  VideoDescription,
} from './styledComponents'

import Header from '../Header'
import WebsitePages from '../WebsitePages'

import './index.css'

class Videos extends Component {
  state = {details: {}, liked: false, disliked: false}

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickLike = event => {
    this.setState({liked: event.target.value})
  }

  onClickDislike = event => {
    this.setState({disliked: event.target.value})
    console.log(event.target.value)
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()
    if (response.ok) {
      const newVideo = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({details: newVideo})
    }
  }

  render() {
    const {details, liked, disliked} = this.state
    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = details
    // const {name, profileImageUrl, subscriberCount} = channel
    // console.log(channel)
    return (
      <>
        <Header />
        <VideoPage>
          <WebsitePages />
          <VideoSide>
            <ReactPlayer
              url={videoUrl}
              width={1250}
              height={500}
              className="video-width"
            />
            <VideoTitle>{title}</VideoTitle>
            <ViewsLikeShare>
              <ViewsTime>
                <Views>{viewCount} views</Views>
                <Dot>.</Dot>
                <Views>{publishedAt}</Views>
              </ViewsTime>
              <LikeDislikeShare>
                <Like
                  liked={liked}
                  type="radio"
                  name="liked"
                  onClick={this.onClickLike}
                >
                  <BiLike />
                  <LikeDislikeShareNames>Like</LikeDislikeShareNames>
                </Like>
                <Dislike
                  disliked={disliked}
                  type="radio"
                  name="liked"
                  onClick={this.onClickDislike}
                >
                  <BiDislike />
                  <LikeDislikeShareNames>Dislike</LikeDislikeShareNames>
                </Dislike>
                <Share>
                  <MdPlaylistAdd />
                  <LikeDislikeShareNames>Share</LikeDislikeShareNames>
                </Share>
              </LikeDislikeShare>
            </ViewsLikeShare>
            <hr />
            {/* <ChannelProfileDetails>
              <ChannelProfile
                src={channel.profileImageUrl}
                alt="channel logo"
              />
              <ChannelDetails>
                <ChannelName>{channel.name}</ChannelName>
                <ChannelSubscribers>
                  {channel.subscriberCount} subscribers
                </ChannelSubscribers>
                <VideoDescription>{description}</VideoDescription>
              </ChannelDetails>
            </ChannelProfileDetails> */}
          </VideoSide>
        </VideoPage>
      </>
    )
  }
}

export default Videos
