const i=`import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";\r
import CopyIcon from "@mui/icons-material/FileCopyOutlined";\r
import PrintIcon from "@mui/icons-material/Print";\r
import ShareIcon from "@mui/icons-material/Share";\r
import EditIcon from "@mui/icons-material/Edit"\r
\r
const MuiSpeedDial = () => {\r
  return (\r
    <div>\r
      <SpeedDial\r
        ariaLabel="Navigation speed dial"\r
        // sx={{ position: "absolute", bottom: 16, right: 16 }}\r
        icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}\r
      >\r
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen/>\r
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen/>\r
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen/>\r
      </SpeedDial>\r
    </div>\r
  );\r
};\r
\r
export default MuiSpeedDial;\r
`;export{i as default};
