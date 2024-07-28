const r=`import {\r
  Box,\r
  Button,\r
  Card,\r
  CardActions,\r
  CardContent,\r
  CardMedia,\r
  Typography,\r
} from "@mui/material";\r
\r
const MuiCard = () => {\r
  return (\r
    <Box width={"300px"}>\r
      <Card>\r
        <CardMedia\r
          component={"img"}\r
          height={"140px"}\r
          image="https://source.unsplash.com/random"\r
          alt="unsplash image"\r
        />\r
        <CardContent>\r
          <Typography gutterBottom variant="h5" component={"div"}>\r
            React\r
          </Typography>\r
          <Typography variant="body2" color={"text.secondary"}>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,\r
            laboriosam.\r
          </Typography>\r
        </CardContent>\r
        <CardActions>\r
          <Button size="small">Share</Button>\r
          <Button size="small">Learn more</Button>\r
        </CardActions>\r
      </Card>\r
    </Box>\r
  );\r
};\r
\r
export default MuiCard;\r
`;export{r as default};
