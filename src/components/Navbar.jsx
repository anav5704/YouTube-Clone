import { Stack } from "@mui/material"
import { Link } from "react-router-dom" 
import { Logo } from "../utils/constants"
import { SearchBar } from "../index"
  
const Navbar = () => 
  (
    <Stack zIndex={100} direction={"row"}  alignItems={"center"} p={2} sx={{borderBottom: "2px solid #262626",background: "#18181b", height: "10vh",  position: "sticky", top: 0, justifyContent: "space-between"}}>
      <Link to="/" style={{display: "flex", alignItems: "center"}}>
        <img src="src/assets/fav.webp" alt="YouTube logo"  style={{height: "60px"}}/>
       </Link>
       <SearchBar />
    </Stack>
  )

export default Navbar
