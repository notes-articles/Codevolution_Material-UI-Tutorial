const n=`import { Autocomplete, Stack, TextField } from "@mui/material";\r
import { useState } from "react";\r
\r
type Skill = {\r
    id: number\r
    label: string\r
}\r
\r
const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React"];\r
\r
// 在 map 方法中，你需要在返回对象时用圆括号包裹对象字面量，\r
// 或者直接使用 return 语句，\r
// 否则 JavaScript 会将大括号 {} 解释为函数体的开始，而不是对象字面量。\r
const skillsOptions = skills.map((skill, index) => ({\r
    id: index +1,\r
    label: skill\r
}))\r
\r
const MuiAutocomplete = () => {\r
  const [value, setValue] = useState<string | null>(null);\r
  //   console.log({ value });\r
  const [skill, setSkill] = useState<Skill|null>(null)\r
  console.log({skill})\r
\r
  const handleChange = (\r
    event: React.SyntheticEvent,\r
    newValue: string | null\r
  ) => {\r
    setValue(newValue);\r
  };\r
\r
  return (\r
    <Stack spacing={2} width={"250px"}>\r
      <Autocomplete\r
        options={skills}\r
        renderInput={(params) => <TextField {...params} label="Skills" />}\r
        value={value}\r
        onChange={handleChange}\r
        freeSolo\r
      />\r
      <Autocomplete\r
        options={skillsOptions}\r
        renderInput={(params) => <TextField {...params} label="Skills" />}\r
        value={skill}\r
        onChange={(event: React.SyntheticEvent, newVlue: Skill | null) => setSkill(newVlue)}\r
      />\r
    </Stack>\r
  );\r
};\r
\r
export default MuiAutocomplete;\r
`;export{n as default};
