const n=`import { Link, Stack, Typography } from "@mui/material";\r
\r
const MuiLink = () => {\r
  return (\r
    <div>\r
      <Stack direction={"row"} spacing={2} m={4}>\r
        <Link href="#">Link</Link>\r
\r
        <Typography variant="h6">\r
          <Link href="#" color={"secondary"} underline="none">\r
            Secondary\r
          </Link>\r
        </Typography>\r
      </Stack>\r
    </div>\r
  );\r
};\r
\r
export default MuiLink;\r
`;export{n as default};
