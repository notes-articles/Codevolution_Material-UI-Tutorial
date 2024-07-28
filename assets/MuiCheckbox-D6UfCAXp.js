const n=`import {\r
  Box,\r
  Checkbox,\r
  FormControl,\r
  FormControlLabel,\r
  FormGroup,\r
  FormLabel,\r
} from "@mui/material";\r
import { useState } from "react";\r
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";\r
import BookmarkIcon from "@mui/icons-material/Bookmark";\r
\r
const MuiCheckbox = () => {\r
  const [acceptTnc, setAcceptTnc] = useState(false);\r
  console.log({ acceptTnc });\r
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\r
    setAcceptTnc(event.target.checked);\r
  };\r
\r
  const [skills, setSkills] = useState<string[]>([])\r
  console.log({skills})\r
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    const index = skills.indexOf(e.target.value)\r
    if(index === -1 ){\r
      setSkills([...skills, e.target.value])\r
    } else {\r
      setSkills(skills.filter((skill) => skill !== e.target.value))\r
    }\r
  }\r
  return (\r
    <Box>\r
      <Box>\r
        <FormControlLabel\r
          label="I accept terms and conditions"\r
          control={<Checkbox checked={acceptTnc} onChange={handleChange} size="small" color="secondary"/>}\r
        />\r
      </Box>\r
      <Box>\r
        <Checkbox\r
          icon={<BookmarkBorderIcon />}\r
          checkedIcon={<BookmarkIcon />}\r
          checked={acceptTnc}\r
          onChange={handleChange}\r
        />\r
      </Box>\r
      <Box>\r
        <FormControl error>\r
          <FormLabel>Skills</FormLabel>\r
          <FormGroup row>\r
            <FormControlLabel\r
              label="HTML"\r
              value="html"\r
              control={<Checkbox checked={skills.includes("html")} onChange={handleSkillChange} />}\r
            />\r
            <FormControlLabel\r
              label="CSS"\r
              value="css"\r
              control={<Checkbox checked={skills.includes("css")} onChange={handleSkillChange} />}\r
            />\r
            <FormControlLabel\r
              label="Javascript"\r
              value="javascript"\r
              control={<Checkbox checked={skills.includes("javascript")} onChange={handleSkillChange} />}\r
            />\r
          </FormGroup>\r
        </FormControl>\r
      </Box>\r
    </Box>\r
  );\r
};\r
\r
export default MuiCheckbox;\r
`;export{n as default};
