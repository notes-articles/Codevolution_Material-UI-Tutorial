const r=`import { Box, Divider, Stack } from "@mui/material";\r
\r
const MuiStack = () => {\r
  return (\r
    <Stack\r
      spacing={2}\r
      direction={"row"}\r
      border={"1px red solid"}\r
      width={"500px"}\r
      height={"500px"}\r
      justifyContent={"space-around"}\r
      alignItems={"center"}\r
    //   divider属性接受一个React元素，它将作为分隔符插入到每个子组件之间。\r
    //   flexItem：于将分隔符适配为一个flex容器中的项目\r
      divider={<Divider orientation="vertical" flexItem/>}\r
    >\r
      <Box height={200} width={200} bgcolor={"primary.main"}>\r
        box1\r
      </Box>\r
      <Box height={200} width={200} bgcolor={"primary.light"}>\r
        box2\r
      </Box>\r
    </Stack>\r
  );\r
};\r
\r
export default MuiStack;\r
`;export{r as default};
