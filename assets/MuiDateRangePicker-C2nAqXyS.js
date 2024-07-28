const e=`import { Stack } from "@mui/material";\r
import {\r
  LocalizationProvider,\r
  DateRangePicker,\r
  DateRange,\r
} from "@mui/x-date-pickers-pro";\r
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";\r
import { useState } from "react";\r
\r
const MuiDateRangePicker = () => {\r
  const [value, setValue] = useState<DateRange<Date>>([null, null]);\r
  return (\r
    <LocalizationProvider dateAdapter={AdapterDateFns}>\r
      <Stack my={5}>\r
        <DateRangePicker\r
          value={value}\r
          onChange={(newVlue) => {\r
            setValue(newVlue);\r
          }}\r
        />\r
      </Stack>\r
    </LocalizationProvider>\r
  );\r
};\r
\r
export default MuiDateRangePicker;\r
`;export{e as default};
