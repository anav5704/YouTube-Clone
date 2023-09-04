import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Video } from "../index"
import fetchAPI from "../utils/api"
 

const Feed = () => {
const date = new Date
const year = date.getFullYear()
 
 return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height: {sx:"auto", md: "90vh"}, borderRight: "2px solid red", px: {sx: 0, md:2}}}>
          <Sidebar />
         <Typography
         variant="body2"
         sx={{mt:1.5 }}
         >
          Copyright {year} Anav
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography variant="h4" fontWeight={"semibold"} mb={2}>
          New <span>vidoes</span>
        </Typography>
        <Video video={[]}/>
      </Box>
    </Stack>
  )
 }

export default Feed
