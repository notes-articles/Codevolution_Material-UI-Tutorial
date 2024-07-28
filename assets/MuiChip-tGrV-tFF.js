const r=`import { Avatar, Chip, Stack } from "@mui/material";\r
import FaceIcon from "@mui/icons-material/Face";\r
import { useState } from "react";\r
\r
const MuiChip = () => {\r
    const [chips, setChips] = useState(["Chip 1", "Chip 2" , "Chip 3"])\r
    const handleDelete = (chipToDelete: string) => {\r
        setChips(chips.filter((chip) => chip !== chipToDelete))\r
    }\r
  return (\r
    <div>\r
      <Stack direction={"row"} spacing={1}>\r
        <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />\r
        <Chip\r
          label="Chip outlined"\r
          color="secondary"\r
          size="small"\r
          variant="outlined"\r
          avatar={<Avatar>V</Avatar>}\r
        />\r
        <Chip label="Click" color="success" onClick={() => alert("Clicked")} />\r
        <Chip\r
          label="Delete"\r
          color="error"\r
          onClick={() => alert("Clicked")}\r
          onDelete={() => alert("Delete handler called")}\r
        />\r
\r
        {\r
            chips.map((chip) => (\r
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>\r
            ))\r
        }\r
      </Stack>\r
    </div>\r
  );\r
};\r
\r
export default MuiChip;\r
`;export{r as default};
