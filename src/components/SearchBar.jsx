import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IconButton, Paper, easing } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSumbit = (e) => {
    e.preventDefault()
    if(query){
      navigate(`/search/${query}`)
      setQuery("")
    }
  }

 return (
    <Paper 
    component={"form"}
    onSubmit={(e) => {handleSumbit(e)}}
    sx={{overflow:"hidden", background: "#262626", borderRadius: 2, width: 350,display: "flex", justifyContent: "space-between", alignItems:"center"}}
    >
    <input 
    className="search-bar"
    type="text" 
    placeholder="Search"
    value={query}
    onChange={(e)=> {setQuery(e.target.value)}}
    />
    <IconButton sx={{color: "red"}} onClick={(e) => {handleSumbit(e)}} >
        <Search />
    </IconButton>
    </Paper>
  )
 }

export default SearchBar
