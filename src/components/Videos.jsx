import { Stack, Box, CircularProgress } from "@mui/material"
import { VideoCard, ChannelCard } from "../index"

const Videos = ({videos}) => {
  
   return (
      !videos.length ? 
      <Stack sx={{display: "grid", placeContent: "center", height: "100%"}}>
        <CircularProgress color="inherit"/> 
      </Stack>
      : 
     <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2} >
        {videos.map((item, index) => ( 
          <Box key={index}>
              {item.id.videoId && <VideoCard video={item}/>}
              {item.id.channelId && <ChannelCard channel={item}/>}
          </Box>
        ))}
    </Stack>
  )
}

export default Videos
