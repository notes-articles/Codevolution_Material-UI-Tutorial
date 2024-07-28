const r=`import { Alert, AlertProps, Button, Snackbar } from "@mui/material";\r
import { useState, forwardRef } from "react";\r
\r
const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(\r
  function SnackbarAlert(props, ref) {\r
    return <Alert elevation={6} ref={ref} {...props} />;\r
  }\r
);\r
const MuiSnackbar = () => {\r
  const [open, setOpen] = useState(false);\r
  const handleClose = (\r
    event?: React.SyntheticEvent | Event,\r
    reaseon?: string\r
  ) => {\r
    if (reaseon === "clickaway") {\r
      return;\r
    }\r
    setOpen(false);\r
  };\r
  return (\r
    <div>\r
      <Button onClick={() => setOpen(true)}>Submit</Button>\r
      {/* <Snackbar\r
        message="From submitted successfully"\r
        autoHideDuration={4000}\r
        open={open}\r
        onClose={handleClose}\r
        anchorOrigin={{\r
          vertical: "bottom",\r
          horizontal: "center",\r
        }}\r
      /> */}\r
\r
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>\r
        <SnackbarAlert onClose={handleClose} severity="success">\r
            Form submitted success\r
        </SnackbarAlert>\r
      </Snackbar>\r
    </div>\r
  );\r
};\r
\r
export default MuiSnackbar;\r
`;export{r as default};
