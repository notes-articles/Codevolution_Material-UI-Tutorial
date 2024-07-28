const n=`import {\r
  Button,\r
  Dialog,\r
  DialogActions,\r
  DialogContent,\r
  DialogContentText,\r
  DialogTitle,\r
} from "@mui/material";\r
import { useState } from "react";\r
\r
const MuiDialog = () => {\r
  const [open, setOpen] = useState(false);\r
\r
  return (\r
    <div>\r
      <Button onClick={() => setOpen(true)}>Open dialog</Button>\r
      <Dialog open={open} onClose={() => setOpen(false)}>\r
        <DialogTitle id="dialog-title" aria-describedby="dialog-description">\r
          Submit the test?\r
        </DialogTitle>\r
        <DialogContent>\r
          <DialogContentText id="dialog-description">\r
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.\r
            Laudantium, perferendis!\r
          </DialogContentText>\r
        </DialogContent>\r
        <DialogActions>\r
          <Button onClick={() => setOpen(false)}>Cancel</Button>\r
          <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>\r
        </DialogActions>\r
      </Dialog>\r
    </div>\r
  );\r
};\r
\r
export default MuiDialog;\r
`;export{n as default};
