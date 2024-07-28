const r=`import { Rating, Stack } from "@mui/material";\r
import { useState } from "react";\r
import FavoriteIcon from '@mui/icons-material/Favorite';\r
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';\r
\r
const MuiRating = () => {\r
//   const [value, setValue] = useState<number | null>(null);\r
  const [value, setValue] = useState<number | null>(3);\r
  console.log({ value });\r
  const handleChange = (\r
    _event: React.ChangeEvent<object>,\r
    newValue: number | null\r
  ) => {\r
    setValue(newValue);\r
  };\r
  return (\r
    <Stack spacing={2}>\r
      <Rating\r
        value={value}\r
        onChange={handleChange}\r
        precision={0.5}\r
        size="large"\r
        icon={<FavoriteIcon fontSize="inherit" color="error"/>}\r
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}\r
        // readOnly\r
        // highlightSelectedOnly\r
      />\r
    </Stack>\r
  );\r
};\r
\r
export default MuiRating;\r
`;export{r as default};
