const r=`import { Typography } from "@mui/material"\r
\r
\r
const MuiTypography = () => {\r
  return (\r
    <div>\r
      <Typography variant="h4" color="primary" align="center" gutterBottom>\r
        Centered Primary Heading with Bottom Margin\r
      </Typography>\r
      <Typography variant="body1" color="textSecondary" noWrap>\r
        This is a body1 text that will not wrap even if it's very long. This text is very long to demonstrate the noWrap property.\r
      </Typography>\r
      <Typography variant="body2" color="error" paragraph>\r
        This is a body2 text with paragraph margin. This text is designed to show how paragraph text is styled in MUI Typography component.\r
      </Typography>\r
      <Typography variant="caption" color="textSecondary">\r
        Caption text with secondary color.\r
      </Typography>\r
      <Typography variant="overline" color="textPrimary">\r
        Overline text with primary color.\r
      </Typography>\r
      <Typography variant="button" color="inherit">\r
        Button text with inherited color.\r
      </Typography>\r
\r
      <Typography variant="body1" gutterBottom>\r
        This text has a bottom margin.\r
      </Typography>\r
      <Typography variant="body1" noWrap>\r
        This text will not wrap.\r
      </Typography>\r
      <Typography variant="body1" paragraph>\r
        This text is a paragraph with margin.\r
      </Typography>\r
    </div>\r
\r
  )\r
}\r
\r
export default MuiTypography`;export{r as default};
