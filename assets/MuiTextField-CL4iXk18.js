const n=`import { InputAdornment, Stack, TextField } from "@mui/material";\r
import { useState } from "react";\r
\r
const MuiTextField = () => {\r
  const [value, setValue] = useState("");\r
  return (\r
    <Stack spacing={4}>\r
      <Stack spacing={2} direction={"row"}>\r
        <TextField label="Name" variant="outlined" />\r
        <TextField label="Name" variant="filled" />\r
        <TextField label="Name" variant="standard" />\r
      </Stack>\r
      <Stack direction={"row"} spacing={2}>\r
        <TextField\r
          label="Small secondary"\r
          size="small"\r
          color="primary"\r
        ></TextField>\r
      </Stack>\r
      <Stack spacing={2} direction={"row"}>\r
        <TextField\r
          label="Form Input"\r
          required\r
          value={value}\r
          error={!value}\r
          onChange={(e) => setValue(e.target.value)}\r
          helperText={\r
            !value ? "Required" : "Do not share your passwrod with anyone"\r
          }\r
        />\r
        <TextField\r
          label="Password"\r
          type="password"\r
          helperText="Do not share your password with anyone"\r
          disabled\r
        />\r
        <TextField label="Read only" InputProps={{ readOnly: true }} />\r
      </Stack>\r
      <Stack spacing={2} direction={"row"}>\r
        <TextField\r
          label="Amount"\r
          InputProps={{\r
            startAdornment: <InputAdornment position="start">$</InputAdornment>,\r
          }}\r
        />\r
        <TextField\r
          label="Weight"\r
          InputProps={{\r
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,\r
          }}\r
        />\r
        <TextField label="Multiline" variant="outlined" multiline rows={4} />\r
      </Stack>\r
      <Stack>\r
        <TextField\r
          label="Styled Input"\r
          variant="outlined"\r
          InputProps={{\r
            style: {\r
              color: "red",\r
              fontSize: "20px",\r
            },\r
          }}\r
        />\r
      </Stack>\r
    </Stack>\r
  );\r
};\r
\r
export default MuiTextField;\r
`;export{n as default};
