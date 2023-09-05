import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "../index"
import fetchAPI from "../utils/api"

const ChannelPage = () => {
  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
     fetchAPI(`channels?part=snippet&id=${id}`).then(data => setChannel(data?.items[0]))
     fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then(data => setVideos(data.items))
     }, [id])

  return (
    <Box minHeight={"95vh"} width={"100%"}  p={2}>
        <ChannelCard channel={channel}/>
        <Videos videos={videos}/>
    </Box>
  )
}

export default ChannelPage
