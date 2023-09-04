import { Stack } from "@mui/material"
import { Link } from "react-router-dom" 
import { Logo } from "../utils/constants"
import { SearchBar } from "../index"
  
const Navbar = () => 
  (
    <Stack direction={"row"} alignItems={"center"} p={2} sx={{height: "10vh", position: "sticky", top: 0, justifyContent: "space-between"}}>
      <Link to="/" style={{display: "flex", alignItems: "center"}}>
        <img src="/fav.webp" alt="YouTube logo"  style={{height: "50px"}}/>
       </Link>
       <SearchBar />
    </Stack>
  )

export default Navbar
