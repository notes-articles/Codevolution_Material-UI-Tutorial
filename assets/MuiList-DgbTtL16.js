const t=`import {\r
  Avatar,\r
  Box,\r
  Divider,\r
  List,\r
  ListItem,\r
  ListItemAvatar,\r
  ListItemButton,\r
  ListItemIcon,\r
  ListItemText,\r
} from "@mui/material";\r
import MailIcon from "@mui/icons-material/Mail";\r
\r
const MuiList = () => {\r
  return (\r
    <div>\r
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>\r
        <List>\r
          <ListItem>\r
            <ListItemButton>\r
              <ListItemIcon>\r
                <ListItemAvatar>\r
                  <Avatar>\r
                    <MailIcon />\r
                  </Avatar>\r
                </ListItemAvatar>\r
              </ListItemIcon>\r
              <ListItemText primary="List itme 1" secondary="Secondary text" />\r
            </ListItemButton>\r
          </ListItem>\r
          {/* 分割线 */}\r
          <Divider/>\r
          <ListItem>\r
            <ListItemIcon>\r
              <ListItemAvatar>\r
                <Avatar>\r
                  <MailIcon />\r
                </Avatar>\r
              </ListItemAvatar>\r
            </ListItemIcon>\r
            <ListItemText primary="List itme 2" secondary="Secondary text" />\r
          </ListItem>\r
          <ListItem>\r
            <ListItemIcon>\r
              <ListItemAvatar>\r
                <Avatar>\r
                  <MailIcon />\r
                </Avatar>\r
              </ListItemAvatar>\r
            </ListItemIcon>\r
            <ListItemText primary="List itme 3" secondary="Secondary text" />\r
          </ListItem>\r
        </List>\r
      </Box>\r
    </div>\r
  );\r
};\r
\r
export default MuiList;\r
`;export{t as default};
