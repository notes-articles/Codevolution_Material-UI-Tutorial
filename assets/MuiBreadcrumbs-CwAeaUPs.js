const r=`import { Box, Breadcrumbs, Link, Typography } from "@mui/material";\r
import NavigateNextIcon from "@mui/icons-material/NavigateNext";\r
\r
const MuiBreadcrumbs = () => {\r
  return (\r
    <div>\r
      <Box m={2}>\r
        <Breadcrumbs\r
          aria-label="breadcrumb"\r
          separator={<NavigateNextIcon fontSize="small" />}\r
          maxItems={1}\r
        //   itemsAfterCollapse={3}\r
          itemsBeforeCollapse={3}\r
        >\r
          <Link underline="hover" href="#">\r
            Home\r
          </Link>\r
          <Link underline="hover" href="#">\r
            Catalog\r
          </Link>\r
          <Link underline="hover" href="#">\r
            About\r
          </Link>\r
          <Link underline="hover" href="#">\r
            Accessories\r
          </Link>\r
          <Typography color={"text.primary"}>Shoes</Typography>\r
        </Breadcrumbs>\r
      </Box>\r
    </div>\r
  );\r
};\r
\r
export default MuiBreadcrumbs;\r
`;export{r as default};
