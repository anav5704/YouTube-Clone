import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { Videos } from "../index"
import fetchAPI from "../utils/api"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { query } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${query}`).then(data => setVideos(data.items))
  }, [query])

  return (
     <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography variant="h4" fontWeight={"semibold"} mb={2}>
        <span>Showing results for </span>"{query}"
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed
