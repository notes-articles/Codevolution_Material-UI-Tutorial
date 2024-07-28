const r=`import { Box, Grid } from "@mui/material";\r
\r
const MuiGrid = () => {\r
  return (\r
    <>\r
      <Box bgcolor={"primary.dark"}>Box</Box>\r
      \r
      <Grid container spacing={2} my={2}>\r
        <Grid item xs={12} sm={6} md={3}>\r
          <Box bgcolor={"primary.light"} p={2}>\r
            Item 1\r
          </Box>\r
        </Grid>\r
        <Grid item xs={12} sm={6} md={3}>\r
          <Box bgcolor={"primary.light"} p={2}>\r
            Item 2\r
          </Box>\r
        </Grid>\r
        <Grid item xs={12} sm={6} md={3}>\r
          <Box bgcolor={"primary.light"} p={2}>\r
            Item 3\r
          </Box>\r
        </Grid>\r
        <Grid item xs={12} sm={6} md={3}>\r
          <Box bgcolor={"primary.light"} p={2}>\r
            Item 4\r
          </Box>\r
        </Grid>\r
      </Grid>\r
    </>\r
  );\r
};\r
\r
export default MuiGrid;\r
`;export{r as default};
