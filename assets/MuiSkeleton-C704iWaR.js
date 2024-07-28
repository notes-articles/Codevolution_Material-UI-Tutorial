const n=`import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";\r
import { useEffect, useState } from "react";\r
\r
const MuiSkeleton = () => {\r
  const [loading, setLoading] = useState(true);\r
\r
  useEffect(() => {\r
    setTimeout(() => {\r
        setLoading(false)\r
    }, 3000)\r
  }, [])\r
  return (\r
    <div>\r
      {/* <Stack spacing={2} width={"250px"}>\r
            <Skeleton variant="text" animation={false}/>\r
            <Skeleton variant="circular" width={40} height={40} animation="wave"/>\r
            <Skeleton variant="rectangular" width={250} height={125} animation="wave"/>\r
        </Stack> */}\r
\r
      <Box sx={{ width: "250px" }}>\r
        {loading ? (\r
          <Skeleton\r
            variant="rectangular"\r
            width={256}\r
            height={144}\r
            animation="wave"\r
          />\r
        ) : (\r
          <img\r
            src="https://source.unsplash.com/random/256x144"\r
            alt="skeleton"\r
            width={256}\r
            height={144}\r
          />\r
        )}\r
        <Stack direction={"row"} spacing={1} sx={{width:"100%", marginTop:"12px"}}>\r
                {\r
                    loading? (\r
                        <Skeleton variant="circular" width={40} height={40} animation="wave"/>\r
                    ):(\r
                        <Avatar>V</Avatar>\r
                    )\r
                }\r
            <Stack sx={{width:"80%"}}>\r
                {\r
                    loading? (\r
                        <>\r
                            <Typography variant="body1">\r
                                <Skeleton variant="text" width={"100%"} animation="wave"/>\r
                            </Typography>\r
                            <Typography variant="body2">\r
                                <Skeleton variant="text" width={"100%"} animation="wave"/>\r
                            </Typography>\r
                        </>\r
                    ):(\r
                        <>\r
                            <Typography variant="body1">React MUI Tutorial</Typography>\r
                        </>\r
                    )\r
                }\r
            </Stack>\r
        </Stack>\r
      </Box>\r
    </div>\r
  );\r
};\r
\r
export default MuiSkeleton;\r
`;export{n as default};
