const r=`import { CircularProgress, LinearProgress, Stack } from "@mui/material"\r
\r
\r
const MuiProgress = () => {\r
  return (\r
    <div>\r
        <Stack spacing={2}>\r
            <CircularProgress/>\r
            <CircularProgress color="success"/>\r
            <CircularProgress variant="determinate" value={60}/>\r
\r
            <LinearProgress/>\r
            <LinearProgress color="success"/>\r
            <LinearProgress variant="determinate" value={60}/>\r
        </Stack>\r
    </div>\r
  )\r
}\r
\r
export default MuiProgress`;export{r as default};
