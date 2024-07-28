const n=`import {\r
  Accordion,\r
  AccordionDetails,\r
  AccordionSummary,\r
  Typography,\r
} from "@mui/material";\r
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";\r
import { useState } from "react";\r
\r
const MuiAccordion = () => {\r
  const [expanded, setExpanded] = useState<string | false>(false);\r
  console.log({expanded})\r
  const handleChange = (isExpanded: boolean, panel: string) => {\r
    setExpanded(isExpanded ? panel : false)\r
  }\r
\r
  return (\r
    <div>\r
      <Accordion expanded={expanded === "panel1"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}>\r
        <AccordionSummary\r
          id="panel-header"\r
          aria-controls="panel-content"\r
          expandIcon={<ExpandMoreIcon />}\r
        >\r
          <Typography>Accordion 1</Typography>\r
        </AccordionSummary>\r
        <AccordionDetails>\r
          <Typography>\r
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,\r
            doloribus!\r
          </Typography>\r
        </AccordionDetails>\r
      </Accordion>\r
      <Accordion expanded={expanded === "panel2"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}>\r
        <AccordionSummary\r
          id="panel2-header"\r
          aria-controls="panel2-content"\r
          expandIcon={<ExpandMoreIcon />}\r
        >\r
          <Typography>Accordion 2</Typography>\r
        </AccordionSummary>\r
        <AccordionDetails>\r
          <Typography>\r
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,\r
            doloribus!\r
          </Typography>\r
        </AccordionDetails>\r
      </Accordion>\r
      <Accordion expanded={expanded === "panel3"} onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}>\r
        <AccordionSummary\r
          id="panel3-header"\r
          aria-controls="panel3-content"\r
          expandIcon={<ExpandMoreIcon />}\r
        >\r
          <Typography>Accordion 3</Typography>\r
        </AccordionSummary>\r
        <AccordionDetails>\r
          <Typography>\r
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,\r
            doloribus!\r
          </Typography>\r
        </AccordionDetails>\r
      </Accordion>\r
    </div>\r
  );\r
};\r
\r
export default MuiAccordion;\r
`;export{n as default};
