const t=`import { Stack } from "@mui/material"\r
import {LoadingButton} from "@mui/lab"\r
import SaveIcon from '@mui/icons-material/Save';\r
\r
const MuiLoadingButton = () => {\r
  return (\r
    <div>\r
        <Stack spacing={2} direction={"row"}>\r
            <LoadingButton variant="outlined">Submit</LoadingButton>\r
            <LoadingButton variant="outlined" loading>Submit</LoadingButton>\r
\r
            <LoadingButton variant="outlined" loadingIndicator="Loading...">Fetch data</LoadingButton>\r
            <LoadingButton variant="outlined" loading loadingIndicator="Loading...">Fetch data</LoadingButton>\r
\r
            <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveIcon/>}>\r
                Save\r
            </LoadingButton>\r
            <LoadingButton loading variant="outlined" loadingPosition="start" startIcon={<SaveIcon/>}>\r
                Save\r
            </LoadingButton>\r
\r
        </Stack>\r
    </div>\r
  )\r
}\r
\r
export default MuiLoadingButton`;export{t as default};
