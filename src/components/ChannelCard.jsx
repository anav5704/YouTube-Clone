import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoUrl, demoVideoTitle } from "../utils/constants"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"


const ChannelCard = ({channel}) => {
console.log(channel)
 return (
    <Box mx={"auto"} sx={{width: {md: "320px", xs: "100%"}, height: "320px",display: "grid", placeContent:"center"}}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
          <CardMedia 
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippets?.title}
          sx={{mb: "10px", borderRadius: "50%", height: "180px", width: "180px"}}
          />
          <Typography variant="h6" color={"gray"}>
            {channel?.snippet?.title}
            <CheckCircle sx={{fontSize: '15px', color: "gray", ml: "5px"}}/>
          </Typography>
          {channel?.statistics?.subscriberCount && 
          (<Typography color={"gray"}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>)
          }
        </CardContent>
      </Link >
    </Box>
  )
}

export default ChannelCard
