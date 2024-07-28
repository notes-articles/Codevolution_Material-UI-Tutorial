const r=`\r
import { Masonry } from "@mui/lab";\r
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";\r
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"\r
\r
const heights = [\r
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,\r
];\r
const MuiMasonry = () => {\r
  return (\r
    <Box sx={{ width: 500, minHeight: 400 }}>\r
      <Masonry columns={4} spacing={1}>\r
        {heights.map((height, index) => (\r
          <Paper\r
            key={index}\r
            sx={{\r
            //   display: "flex",\r
            //   justifyContent: "center",\r
            //   alignItems: "center",\r
            //   height,\r
              border: "1px solid",\r
            }}\r
          >\r
            <Accordion sx={{minHeight:height}}>\r
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>\r
                    <Typography>Accordion {index+1}</Typography>\r
                </AccordionSummary>\r
                <AccordionDetails>Content</AccordionDetails>\r
            </Accordion>\r
            </Paper>\r
        ))}\r
      </Masonry>\r
    </Box>\r
  );\r
};\r
\r
export default MuiMasonry;\r
`;export{r as default};
