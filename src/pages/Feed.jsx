import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from "../index"
import fetchAPI from "../utils/api"
 

const Feed = () => {
const date = new Date
const year = date.getFullYear()
const [active, setActive] = useState("New")
const [videos, setVideos] = useState([])

useEffect(() => {
  fetchAPI(`search?part=snippet&q=${active}`).then(data => setVideos(data.items))
}, [active])
 
 return (
    <Stack sx={{  flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height: {sx:"auto", md: "90vh"}, borderRight: "2px solid #262626", px: {sx: 0, md:2}}}>
          <Sidebar active={active} setActive={setActive}/>
         <Typography
         variant="body2"
         sx={{mt:1.5 }}
         >
         </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
        {!videos.length ?  null : 
        <Typography variant="h4" fontWeight={"semibold"} mb={2}>
        {active} <span>videos</span>
        </Typography>}
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
 }

export default Feed
