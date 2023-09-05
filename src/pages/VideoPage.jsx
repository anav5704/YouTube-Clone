import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import fetchAPI from "../utils/api"
import { Videos } from "../index"
import { CheckCircle, Favorite, Visibility } from "@mui/icons-material"

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
    <Box height={"90vh"} overflow={"scroll"}>
      <Stack my={5} direction={"column"} alignItems={"center"}  >
        <Box flex={1} >
          <Box sx={{width: "100%"}} justifyContent={"center"}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls playing/>
          <Typography variant="h5" my={2}>
            {video?.snippet?.title.slice(0, 50)}...
          </Typography>
          <Stack color="gray" direction={"row"} justifyContent={"space-between"} ml={1} >
          <Link to={`/channel/${video?.snippet?.channelId}`}>
            <Typography  color="gray" variant={{sm: "subtitile1", md: "h6"}}>
              {video?.snippet?.channelTitle}
              <CheckCircle sx={{fontSize: '15px', color: "gray", ml: "5px"}}/>
            </Typography>
          </Link>
            <Typography variant="body1" sx={{opacity: 0.75}}>
              {parseInt(video?.statistics?.viewCount).toLocaleString()} 
              <Favorite sx={{fontSize: '15px', color: "gray", ml: "5px"}}/>
            </Typography>
            <Typography variant="body1" sx={{opacity: 0.75}}>
              {parseInt(video?.statistics?.likeCount).toLocaleString()} 
              <Visibility sx={{fontSize: '15px', color: "gray", ml: "5px"}}/>
            </Typography>
          </Stack>
          </Box>
        </Box>
      </Stack>
      <Box  justifyContent={"center"} alignItems={"center"} p={2}>
        <Videos videos={related}/>
      </Box>
    </Box>
  )
}

export default VideoPage
