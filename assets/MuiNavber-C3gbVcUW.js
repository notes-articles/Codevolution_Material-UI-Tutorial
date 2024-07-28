const n=`import {\r
  AppBar,\r
  Button,\r
  IconButton,\r
  Menu,\r
  MenuItem,\r
  Stack,\r
  Toolbar,\r
  Typography,\r
} from "@mui/material";\r
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";\r
import { useState } from "react";\r
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";\r
\r
const MuiNavber = () => {\r
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);\r
  const open = Boolean(anchorEl);\r
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {\r
    setAnchorEl(event.currentTarget);\r
  };\r
  const handleClose = () => {\r
    setAnchorEl(null);\r
  };\r
\r
  return (\r
    <AppBar position="static">\r
      <Toolbar>\r
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">\r
          <CatchingPokemonIcon />\r
        </IconButton>\r
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>\r
          POKEMONAPP\r
        </Typography>\r
        <Stack direction={"row"} spacing={2}>\r
          <Button color="inherit">Features</Button>\r
          <Button color="inherit">Pricing</Button>\r
          <Button color="inherit">About</Button>\r
          <Button\r
            color="inherit"\r
            id="resources-button"\r
            onClick={handleClick}\r
            // aria-controls：设置菜单控件的ID。\r
            aria-controls={open ? "resources-menu" : undefined}\r
            // aria-haspopup：指示按钮具有下拉菜单。\r
            aria-haspopup="true"\r
            // aria-expanded：指示菜单是否展开。\r
            aria-expanded={open ? "true" : undefined}\r
            // endIcon：在按钮末尾添加图标（KeyboardArrowDownIcon）。\r
            endIcon={<KeyboardArrowDownIcon />}\r
          >\r
            Resources\r
          </Button>\r
          <Button color="inherit">Login</Button>\r
        </Stack>\r
        <Menu\r
          id="resources-menu"\r
          // anchorEl：设置菜单的锚元素。\r
          anchorEl={anchorEl}\r
          // open：控制菜单的显示状态。\r
          open={open}\r
          // MenuListProps：设置菜单列表的属性。\r
          MenuListProps={{\r
            "aria-labelledby": "resources-button",\r
          }}\r
          onClose={handleClose}\r
          // anchorOrigin 和 transformOrigin：控制菜单的弹出位置。\r
          // anchorOrigin 用于指定菜单相对于锚元素（即触发菜单的元素）的对齐方式。\r
          anchorOrigin={{\r
            vertical: "bottom",\r
            horizontal: "right",\r
          }}\r
          // transformOrigin 用于指定菜单相对于自身的变换起点。它同样有两个属性：\r
          transformOrigin={{\r
            vertical: "top",\r
            horizontal: "right",\r
          }}\r
        >\r
          <MenuItem onClick={handleClose}>Blog</MenuItem>\r
          <MenuItem onClick={handleClose}>Podcast</MenuItem>\r
        </Menu>\r
      </Toolbar>\r
    </AppBar>\r
  );\r
};\r
\r
export default MuiNavber;\r
`;export{n as default};
