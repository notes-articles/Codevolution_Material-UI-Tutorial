const r=`import { Box, Drawer, IconButton, Typography } from "@mui/material";\r
import { useState } from "react";\r
import MenuIcon from "@mui/icons-material/Menu";\r
const MuiDrawer = () => {\r
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);\r
  return (\r
    <div>\r
      <IconButton\r
        size="large"\r
        edge="start"\r
        color="inherit"\r
        aria-label="log"\r
        onClick={() => setIsDrawerOpen(true)}\r
      >\r
        <MenuIcon />\r
      </IconButton>\r
      <Drawer\r
        anchor="left"\r
        open={isDrawerOpen}\r
        onClose={() => setIsDrawerOpen(false)}\r
      >\r
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">\r
          <Typography variant="h6" component={"div"}>\r
            Side Panel\r
          </Typography>\r
        </Box>\r
      </Drawer>\r
    </div>\r
  );\r
};\r
\r
export default MuiDrawer;\r
`;export{r as default};
