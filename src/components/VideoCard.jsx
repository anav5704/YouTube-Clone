import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoThumbnailUrl, demoVideoUrl, demoVideoTitle } from "../utils/constants"
import { CheckCircle } from "@mui/icons-material"

const VideoCard = ({video: {id : {videoId}, snippet}}) => 
 (
   <Card  sx={{backgroundColor: "#1e1e1e", height:"100%", width: {md: "320px", xs: "100%"}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}  
        sx={{width: "350px", height: "180px"}}
        />
        <CardContent>
        <Typography variant="subtitle1" fontWeight={"semibold"} color={"whitesmoke"}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight={"semibold"} color={"gray"}>
              {snippet?.channelTitle.slice(0, 60) || demoChannelUrl.slice(0, 60)}
              <CheckCircle sx={{fontSize: '15px', color: "gray", ml: "5px"}}/>
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )

export default VideoCard
