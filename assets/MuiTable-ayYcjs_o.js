const r=`import {\r
  Paper,\r
  Table,\r
  TableBody,\r
  TableCell,\r
  TableContainer,\r
  TableHead,\r
  TableRow,\r
} from "@mui/material";\r
\r
const MuiTable = () => {\r
  return (\r
    <div>\r
      <TableContainer component={Paper} sx={{maxHeight:"300px"}}>\r
        <Table aria-lable="simple-table" stickyHeader>\r
          <TableHead>\r
            <TableRow>\r
              <TableCell>Id</TableCell>\r
              <TableCell>First Name</TableCell>\r
              <TableCell>Last Name</TableCell>\r
              <TableCell align="center">Email</TableCell>\r
            </TableRow>\r
          </TableHead>\r
          <TableBody>\r
            {tableData.map((row) => (\r
              <TableRow\r
                key={row.id}\r
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}\r
              >\r
                <TableCell>{row.id}</TableCell>\r
                <TableCell>{row.first_name}</TableCell>\r
                <TableCell>{row.last_name}</TableCell>\r
                <TableCell align="center">{row.email}</TableCell>\r
              </TableRow>\r
            ))}\r
          </TableBody>\r
        </Table>\r
      </TableContainer>\r
    </div>\r
  );\r
};\r
//   https://mockaroo.com/\r
const tableData = [\r
  {\r
    id: 1,\r
    first_name: "Hayward",\r
    last_name: "Pogue",\r
    email: "hpogue0@over-blog.com",\r
    gender: "Male",\r
    ip_address: "198.166.202.247",\r
  },\r
  {\r
    id: 2,\r
    first_name: "Lilias",\r
    last_name: "Belverstone",\r
    email: "lbelverstone1@wiley.com",\r
    gender: "Female",\r
    ip_address: "109.236.230.207",\r
  },\r
  {\r
    id: 3,\r
    first_name: "Udell",\r
    last_name: "Pebworth",\r
    email: "upebworth2@example.com",\r
    gender: "Male",\r
    ip_address: "85.217.181.1",\r
  },\r
  {\r
    id: 4,\r
    first_name: "Kym",\r
    last_name: "Rozenbaum",\r
    email: "krozenbaum3@altervista.org",\r
    gender: "Female",\r
    ip_address: "176.86.219.7",\r
  },\r
  {\r
    id: 5,\r
    first_name: "Hamish",\r
    last_name: "Ragbourne",\r
    email: "hragbourne4@facebook.com",\r
    gender: "Male",\r
    ip_address: "31.79.209.72",\r
  },\r
  {\r
    id: 6,\r
    first_name: "Rooney",\r
    last_name: "Houltham",\r
    email: "rhoultham5@wufoo.com",\r
    gender: "Male",\r
    ip_address: "185.12.12.121",\r
  },\r
  {\r
    id: 7,\r
    first_name: "Vitia",\r
    last_name: "Jakubowsky",\r
    email: "vjakubowsky6@deliciousdays.com",\r
    gender: "Female",\r
    ip_address: "25.89.1.253",\r
  },\r
  {\r
    id: 8,\r
    first_name: "Sharlene",\r
    last_name: "Faley",\r
    email: "sfaley7@istockphoto.com",\r
    gender: "Female",\r
    ip_address: "160.191.84.179",\r
  },\r
  {\r
    id: 9,\r
    first_name: "Roseann",\r
    last_name: "Oblein",\r
    email: "roblein8@merriam-webster.com",\r
    gender: "Female",\r
    ip_address: "16.199.156.174",\r
  },\r
  {\r
    id: 10,\r
    first_name: "Norby",\r
    last_name: "Clayborn",\r
    email: "nclayborn9@mtv.com",\r
    gender: "Male",\r
    ip_address: "173.250.254.153",\r
  },\r
];\r
export default MuiTable;\r
`;export{r as default};
