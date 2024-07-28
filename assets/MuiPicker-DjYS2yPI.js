const e=`\r
import { CircularProgress, Stack } from "@mui/material";\r
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";\r
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";\r
import { useState } from "react";\r
\r
const MuiPicker = () => {\r
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);\r
  const [selectedTime, setselectedTime] = useState<Date | null>(null);\r
  return (\r
    <LocalizationProvider dateAdapter={AdapterDateFns}>\r
      <div>\r
        <Stack spacing={4} sx={{ width: "250px" }} py={5}>\r
          <DatePicker\r
            label="Date Picker"\r
            value={selectedDate}\r
            onChange={(newValue) => {\r
              setSelectedDate(newValue);\r
            }}\r
            renderLoading={() => <CircularProgress />}\r
          />\r
\r
          <TimePicker label="Time Picker" value={selectedTime} onChange={(newVlue) => {\r
            setselectedTime(newVlue)\r
          }}/>\r
        </Stack>\r
      </div>\r
    </LocalizationProvider>\r
  );\r
};\r
\r
export default MuiPicker;\r
`;export{e as default};
