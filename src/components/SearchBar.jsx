import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IconButton, Paper } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => 
 (
    <Paper 
    component={"form"}
    onSubmit={() => {}}
    sx={{borderRadius: 2, px: 2, width: 200,display: "flex", justifyContent: "space-between", alignItems:"center"}}
    >
    Search
    <IconButton sx={{color: "red"}} >
        <Search />
    </IconButton>
    </Paper>
  )

export default SearchBar
