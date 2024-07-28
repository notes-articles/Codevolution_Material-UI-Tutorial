const r=`import { Badge, Stack } from "@mui/material"\r
import MailIcon from "@mui/icons-material/Mail"\r
\r
const MuiBadge = () => {\r
  return (\r
    <div>\r
        <Stack spacing={2} direction={"row"} m={5}>\r
            <Badge badgeContent={5} color="primary">\r
                <MailIcon/>\r
            </Badge>\r
            <Badge badgeContent={0} color="secondary" showZero>\r
                <MailIcon/>\r
            </Badge>\r
            <Badge badgeContent={100} color="primary">\r
                <MailIcon/>\r
            </Badge>\r
            <Badge badgeContent={100} color="secondary" max={999}>\r
                <MailIcon/>\r
            </Badge>\r
            <Badge variant="dot"  color="secondary" invisible={true}>\r
                <MailIcon/>\r
            </Badge>\r
        </Stack>\r
    </div>\r
  )\r
}\r
\r
export default MuiBadge`;export{r as default};
