const r=`import { Avatar, AvatarGroup, Stack } from "@mui/material";\r
\r
const MuiAvatat = () => {\r
  return (\r
    <div>\r
      <Stack spacing={4}>\r
        <Stack direction={"row"} spacing={1}>\r
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>\r
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>\r
        </Stack>\r
        <Stack direction={"row"} spacing={1}>\r
          <AvatarGroup max={3}>\r
            <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>\r
            <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>\r
            <Avatar\r
              src="https://randomuser.me/api/portraits/women/79.jpg"\r
              alt="Jane Doe"\r
            />\r
            <Avatar\r
              src="https://randomuser.me/api/portraits/men/51.jpg"\r
              alt="John Doe"\r
            />\r
          </AvatarGroup>\r
        </Stack>\r
        <Stack direction={"row"} spacing={1}>\r
          <Avatar variant="square" sx={{ bgcolor: "primary.light", width:48, height:48 }}>BW</Avatar>\r
          <Avatar variant="rounded" sx={{ bgcolor: "success.light", width:48, height:48 }}>CK</Avatar>\r
        </Stack>\r
      </Stack>\r
    </div>\r
  );\r
};\r
\r
export default MuiAvatat;\r
`;export{r as default};
