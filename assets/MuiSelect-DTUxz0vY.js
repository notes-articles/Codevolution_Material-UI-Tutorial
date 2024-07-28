const e=`import { Box, MenuItem, TextField } from "@mui/material";\r
import { useState } from "react";\r
\r
const MuiSelect = () => {\r
  const [countries, setCountries] = useState<string[]>([]);\r
  console.log({countries});\r
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    const value = e.target.value;\r
    setCountries(typeof value === 'string'? value.split(',') : value);\r
  };\r
\r
  return (\r
    <Box width="150px">\r
      <TextField\r
        label="Select country"\r
        select\r
        value={countries}\r
        onChange={handleChange}\r
        fullWidth\r
        SelectProps={{\r
            multiple: true\r
        }}\r
        size="small"\r
        color="secondary"\r
        helperText="choose your country"\r
      >\r
        <MenuItem value="IN">India</MenuItem>\r
        <MenuItem value="US">USA</MenuItem>\r
        <MenuItem value="AU">Austraia</MenuItem>\r
      </TextField>\r
    </Box>\r
  );\r
};\r
\r
export default MuiSelect;\r
`;export{e as default};
