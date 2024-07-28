const n=`import { Box } from "@mui/material"\r
\r
\r
const MuiResponsiveness = () => {\r
  return (\r
    <Box sx={{\r
        height:"300px",\r
        width:{\r
            xs:100, //@media (min-width: 0px)\r
            sm:200, // @media (min-width: 600px)\r
            md:300, // @media (min-width: 900px)\r
            lg:400, // @media (min-width: 1200px)\r
            xl:500 // @media (min-width: 1536px)\r
        },\r
        bgcolor:"primary.main"\r
    }}></Box>\r
  )\r
}\r
\r
export default MuiResponsiveness`;export{n as default};
