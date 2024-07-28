const e=`import { Box, FormControlLabel, Switch } from "@mui/material"\r
import { useState } from "react"\r
\r
\r
const MuiSwitch = () => {\r
    const [checked,setChecked] = useState(false)\r
    console.log({checked})\r
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
        setChecked(e.target.checked)\r
    }\r
  return (\r
    <Box>\r
        <FormControlLabel label="Dark mode" control={<Switch checked={checked} onChange={handleChange}/>}/>\r
    </Box>\r
  )\r
}\r
\r
export default MuiSwitch`;export{e as default};
