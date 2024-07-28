const r=`import { Alert, AlertTitle, Button, Stack } from "@mui/material";\r
import CheckIcon from "@mui/icons-material/Check";\r
\r
const MuiAlert = () => {\r
  return (\r
    <div>\r
      <Stack spacing={2}>\r
        <Alert severity="error">This is an error alert</Alert>\r
        <Alert severity="warning">This is an warning alert</Alert>\r
        <Alert severity="info">This is an info alert</Alert>\r
        <Alert severity="success">This is an success alert</Alert>\r
\r
        <Alert variant="outlined" severity="error">\r
          This is an error alert\r
        </Alert>\r
        <Alert variant="outlined" severity="warning">\r
          This is an warning alert\r
        </Alert>\r
        <Alert variant="outlined" severity="info">\r
          This is an info alert\r
        </Alert>\r
        <Alert variant="outlined" severity="success">\r
          This is an success alert\r
        </Alert>\r
\r
        <Alert\r
          variant="filled"\r
          severity="error"\r
          onClose={() => alert("Close Alert")}\r
        >\r
          <AlertTitle>Error</AlertTitle>\r
          This is an error alert\r
        </Alert>\r
        <Alert variant="filled" severity="warning">\r
          <AlertTitle>Warning</AlertTitle>\r
          This is an warning alert\r
        </Alert>\r
        <Alert variant="filled" severity="info">\r
          <AlertTitle>Info</AlertTitle>\r
          This is an info alert\r
        </Alert>\r
        <Alert\r
          variant="filled"\r
          severity="success"\r
          icon={<CheckIcon fontSize="inherit" />}\r
          action={\r
            <Button color="inherit" size="small">UNDO</Button>\r
          }\r
        >\r
          <AlertTitle>Success</AlertTitle>\r
          This is an success alert\r
        </Alert>\r
      </Stack>\r
    </div>\r
  );\r
};\r
\r
export default MuiAlert;\r
`;export{r as default};
