const r=`\r
import Paper from '@mui/material/Paper';\r
import Typography from '@mui/material/Typography';\r
import { styled } from '@mui/material/styles';\r
\r
const StyledPaper = styled(Paper)(({ theme }) => ({\r
    padding: theme.spacing(2),\r
    textAlign: 'center',\r
    color: theme.palette.text.secondary,\r
  }));\r
  \r
  function MuiPaper() {\r
    return (\r
        <div>\r
        <StyledPaper elevation={1}>\r
          <Typography variant="h5">Elevation 1</Typography>\r
        </StyledPaper>\r
        <StyledPaper elevation={10} sx={{ mt: 2 }}>\r
          <Typography variant="h5">Elevation 10</Typography>\r
        </StyledPaper>\r
        <Paper square sx={{ padding: 2, mt: 2 }}>\r
          <Typography variant="h5">Square Paper</Typography>\r
        </Paper>\r
        <Paper variant="outlined" sx={{ padding: 2, mt: 2 }}>\r
          <Typography variant="h5">Outlined Paper</Typography>\r
        </Paper>\r
        <Paper sx={{ padding: 4, backgroundColor: 'primary.main', color: 'primary.contrastText', mt: 2 }}>\r
          <Typography variant="h5">Custom SX Styled Paper</Typography>\r
        </Paper>\r
      </div>\r
    );\r
  }\r
\r
export default MuiPaper`;export{r as default};
