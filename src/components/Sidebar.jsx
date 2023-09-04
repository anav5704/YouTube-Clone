import { Stack } from "@mui/material"
import {Categories} from "../utils/constants"

const Sidebar = () => {
    const active = "New"

  return (
    <Stack direction="column"  sx={{overflowY: "auto", height: {sx: "auto", md: "90%"}, flexDirection: {md: "colomn"}}}>
      { Categories.map(category => (
        <button className="category-btn" style={{background: category.name === active && "#fc1503", color: "whitesmoke"}} key={category.name}>
            <span  style={{color: category.name === active ? "whitesmoke" : "red", marginRight:"15px"}}>{category.icon}</span>
            <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar
