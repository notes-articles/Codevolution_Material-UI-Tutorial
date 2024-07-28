const n=`import { IconButton, Tooltip } from "@mui/material";\r
import DeleteIcon from "@mui/icons-material/Delete";\r
\r
const MuiTooltip = () => {\r
  return (\r
    <div>\r
      <Tooltip\r
        title="Delete"\r
        placement="right"\r
        arrow\r
        enterDelay={500}\r
        leaveDelay={200}\r
      >\r
        <IconButton>\r
          <DeleteIcon />\r
        </IconButton>\r
      </Tooltip>\r
    </div>\r
  );\r
};\r
\r
export default MuiTooltip;\r
`;export{n as default};
