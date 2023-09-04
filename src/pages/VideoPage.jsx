import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import fetchAPI from "../utils/api"
import { Videos } from "../index"
import { CheckCircle } from "@mui/icons-material"

const VideoPage = () => {
  const [video, setVideo] = useState([])
  const [related, setRelated] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then(data => setVideo(data?.items[0]))
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}`).then(data => setRelated(data?.items))
  }, [id])

  if(!video?.snippet) return "Loading..."

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={"column"}>
        <Box flex={1}>
          <Box sx={{width: "100%", position:"sticky", top: "100px"}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
          <Typography variant="h5" m={1}>
            {video?.snippet?.title}
          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"} ml={1} >
          <Link to={`/channel/${video?.snippet?.channelId}`}>
            <Typography color="gray" variant={{sm: "subtitile1", md: "h6"}}>
              {video?.snippet?.channelTitle}
              <CheckCircle sx={{fontSize: '15px', color: "gray", ml: "5px"}}/>
            </Typography>
          </Link>
          </Stack>
          <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
            <Typography variant="body1" sx={{opacity: 0.75}}>
              {parseInt(video?.snippet?.statistics?.viewCount).toLocaleString()} views
            </Typography>
            <Typography variant="body1" sx={{opacity: 0.75}}>
              {parseInt(video?.snippet?.statistics?.likeCount).toLocaleString()} likes
            </Typography>
          </Stack>
          </Box>
        </Box>
      </Stack>
      <Box p={2} justifyContent={"center"} alignItems={"center"}>
        <Videos videos={related}/>
      </Box>
    </Box>
  )
}

export default VideoPage
