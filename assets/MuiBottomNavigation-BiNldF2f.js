const o=`import { BottomNavigation, BottomNavigationAction } from "@mui/material";\r
import { useState } from "react";\r
import HomeIcon from "@mui/icons-material/Home"\r
import FavoriteIcon from "@mui/icons-material/Favorite"\r
import PersonIcon from "@mui/icons-material/Person"\r
\r
const MuiBottomNavigation = () => {\r
  const [value, setValue] = useState(0);\r
  console.log({value})\r
  return (\r
    <div>\r
      <BottomNavigation\r
      //  ,position: "absolute", bottom: 0 \r
        sx={{ width: "100%"}}\r
        value={value}\r
        onChange={(event, newValue) => {\r
            setValue(newValue)\r
        }}\r
        showLabels\r
      >\r
        <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>\r
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>\r
        <BottomNavigationAction label="Profile" icon={<PersonIcon/>}/>\r
      </BottomNavigation>\r
    </div>\r
  );\r
};\r
\r
export default MuiBottomNavigation;\r
`;export{o as default};
