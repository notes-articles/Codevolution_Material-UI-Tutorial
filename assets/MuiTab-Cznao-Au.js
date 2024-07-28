const a=`import { TabContext, TabList, TabPanel } from "@mui/lab";\r
import { Box, Tab } from "@mui/material";\r
import { useState } from "react";\r
import FavoriteIcon from '@mui/icons-material/Favorite';\r
\r
const MuiTab = () => {\r
  const [value, setValue] = useState("1");\r
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {\r
    setValue(newValue);\r
  };\r
\r
  return (\r
    <div>\r
      <TabContext value={value}>\r
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px"}}>\r
          <TabList\r
            aria-label="Tabs example"\r
            onChange={handleChange}\r
            textColor="secondary"\r
            indicatorColor="secondary"\r
            // centered\r
            variant="scrollable"\r
            scrollButtons="auto"\r
          >\r
            <Tab label="Tab One" value="1" icon={<FavoriteIcon/>} iconPosition="start"/>\r
            <Tab label="Tab Two" value="2" disabled/>\r
            <Tab label="Tab Three" value="3" />\r
            <Tab label="Tab Four" value="4" />\r
            <Tab label="Tab Five" value="5" />\r
            <Tab label="Tab Six" value="6" />\r
          </TabList>\r
        </Box>\r
        <TabPanel value="1">Panel One</TabPanel>\r
        <TabPanel value="2">Panel Two</TabPanel>\r
        <TabPanel value="3">Panel Three</TabPanel>\r
        <TabPanel value="4">Panel Four</TabPanel>\r
        <TabPanel value="5">Panel Five</TabPanel>\r
        <TabPanel value="6">Panel Six</TabPanel>\r
      </TabContext>\r
    </div>\r
  );\r
};\r
\r
export default MuiTab;\r
`;export{a as default};
