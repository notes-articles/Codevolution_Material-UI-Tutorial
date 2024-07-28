const r=`\r
import { Box } from "@mui/material";\r
const MuiBox = () => {\r
  return (\r
    <Box\r
        sx={{\r
          backgroundColor: "primary.main",\r
          color: "white",\r
          height: "100px",\r
          width: "100px",\r
          padding: "16px",\r
          "&:hover": {\r
            backgroundColor: "primary.light",\r
          },\r
        }}\r
      >\r
        Codevolution\r
      </Box>\r
  )\r
}\r
\r
export default MuiBox`;export{r as default};
