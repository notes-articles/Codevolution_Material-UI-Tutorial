const t=`import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'\r
import SendIcon from '@mui/icons-material/Send';\r
import FormatBoldIcon from '@mui/icons-material/FormatBold';\r
import FormatItalicIcon from '@mui/icons-material/FormatItalic';\r
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';\r
import { useState } from 'react';\r
\r
const MuiButton = () => {\r
  const [formats, setFormats] = useState<string | null>();\r
  console.log({\r
    formats,\r
  })\r
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updateFormats: string | null) => {\r
    setFormats(updateFormats);\r
  }\r
\r
  const [alignment, setAlignment] = useState('left');\r
  console.log({\r
    alignment,\r
  })\r
  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {\r
    setAlignment(newAlignment);\r
  };\r
\r
  return (\r
    <Stack spacing={4}>\r
      <Stack spacing={2} direction={'row'}>\r
        <Button variant='text' href='https://google.com'>text</Button>\r
        <Button variant='contained'>Contained</Button>\r
        <Button variant='outlined'>Outlined</Button>\r
      </Stack>\r
      <Stack spacing={2} direction={'row'}>\r
        <Button variant='contained' color='primary'>Primary</Button>\r
        <Button variant='contained' color='secondary'>Secondary</Button>\r
        <Button variant='contained' color='error'>Error</Button>\r
        <Button variant='contained' color='warning'>Warning</Button>\r
        <Button variant='contained' color='info'>Info</Button>\r
        <Button variant='contained' color='success'>Success</Button>\r
      </Stack>\r
      <Stack display={'block'} spacing={2} direction={'row'}>\r
        <Button variant='contained' size='small'>\r
          Small\r
        </Button>\r
        <Button variant='contained' size='medium'>\r
          Medium\r
        </Button>\r
        <Button variant='contained' size='large'>\r
          Large\r
        </Button>\r
      </Stack>\r
      <Stack spacing={2} direction={'row'}>\r
        <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert('Clicked')}>Send</Button>\r
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>\r
        <IconButton aria-label='send' color='success' size='small'>\r
          <SendIcon />\r
        </IconButton>\r
      </Stack>\r
      <Stack direction={'row'}>\r
        <ButtonGroup\r
          variant='contained'\r
          orientation='vertical'\r
          size='small'\r
          color='secondary'\r
          aria-label='alignment button group'\r
        >\r
          <Button>Left</Button>\r
          <Button>Center</Button>\r
          <Button>Right</Button>\r
        </ButtonGroup>\r
      </Stack>\r
      <Stack direction={'row'}>\r
        <ToggleButtonGroup \r
        aria-label='text formatting' \r
        value={formats} \r
        onChange={handleFormatChange} \r
        size='small' \r
        color='success' \r
        orientation='vertical'\r
\r
        >\r
          <ToggleButton value='bold' aria-label='bold'>\r
            <FormatBoldIcon />\r
          </ToggleButton>\r
          <ToggleButton value='italic' aria-label='italic'>\r
            <FormatItalicIcon />\r
          </ToggleButton>\r
          <ToggleButton value='underlined' aria-label='underlined'>\r
            <FormatUnderlinedIcon />\r
          </ToggleButton>\r
        </ToggleButtonGroup>\r
      </Stack>\r
      <Stack>\r
      <ToggleButtonGroup\r
      value={alignment}\r
      exclusive\r
      onChange={handleAlignment}\r
      aria-label="text alignment"\r
    >\r
      <ToggleButton value="left" aria-label="left aligned">\r
        Left\r
      </ToggleButton>\r
      <ToggleButton value="center" aria-label="center aligned">\r
        Center\r
      </ToggleButton>\r
      <ToggleButton value="right" aria-label="right aligned">\r
        Right\r
      </ToggleButton>\r
      <ToggleButton value="justify" aria-label="justified" disabled>\r
        Justify\r
      </ToggleButton>\r
    </ToggleButtonGroup>\r
      </Stack>\r
    </Stack>\r
\r
  )\r
}\r
\r
export default MuiButton`;export{t as default};
