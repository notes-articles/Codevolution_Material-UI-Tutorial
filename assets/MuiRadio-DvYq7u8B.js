const r=`import {\r
  Box,\r
  FormControl,\r
  FormControlLabel,\r
  FormHelperText,\r
  FormLabel,\r
  Radio,\r
  RadioGroup,\r
} from "@mui/material";\r
import { useState } from "react";\r
\r
const MuiRadio = () => {\r
  const [value, setValue] = useState("");\r
  console.log({ value });\r
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setValue(e.target.value);\r
  };\r
  return (\r
    <Box>\r
      <FormControl>\r
        <FormLabel id="job-experience-group-albel">\r
          Years of experience\r
        </FormLabel>\r
        <RadioGroup\r
          name="job-experience-group"\r
          aria-labelledby="job-experience-group-label"\r
          value={value}\r
          onChange={handleChange}\r
          row // 在一行显示\r
        >\r
          <FormControlLabel\r
            control={<Radio size="medium" color="secondary"/>}\r
            label="0-2"\r
            value="0-2"\r
          />\r
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />\r
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />\r
        </RadioGroup>\r
        <FormHelperText>Invalid selection</FormHelperText>\r
      </FormControl>\r
    </Box>\r
  );\r
};\r
\r
export default MuiRadio;\r
`;export{r as default};
