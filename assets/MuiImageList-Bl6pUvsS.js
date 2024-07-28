const t=`import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";\r
\r
const MuiImageList = () => {\r
  return (\r
    <Stack spacing={4}>\r
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>\r
        {itemData.map((item) => (\r
          <ImageListItem key={item.img}>\r
            <img\r
              src={\`\${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2\`}\r
              alt={item.title}\r
              loading="lazy"\r
            />\r
            <ImageListItemBar title={item.title}/>\r
          </ImageListItem>\r
        ))}\r
      </ImageList>\r
      <ImageList variant="woven" sx={{ width: 500, height: 450 }} cols={3} gap={8}>\r
        {itemData2.map((item) => (\r
          <ImageListItem key={item.img}>\r
            <img\r
              src={\`\${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2\`}\r
              alt={item.title}\r
              loading="lazy"\r
            />\r
          </ImageListItem>\r
        ))}\r
      </ImageList>\r
      <Box sx={{ width: 500, height: 450, overflowY:"scroll" }}>\r
      <ImageList variant="masonry" cols={3} gap={8}>\r
        {itemData3.map((item) => (\r
          <ImageListItem key={item.img}>\r
            <img\r
              src={\`\${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2\`}\r
              alt={item.title}\r
              loading="lazy"\r
            />\r
          </ImageListItem>\r
        ))}\r
      </ImageList>\r
      </Box>\r
    </Stack>\r
  );\r
};\r
const itemData = [\r
  {\r
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",\r
    title: "Breakfast",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",\r
    title: "Burger",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",\r
    title: "Camera",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",\r
    title: "Coffee",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",\r
    title: "Hats",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",\r
    title: "Honey",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",\r
    title: "Basketball",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",\r
    title: "Fern",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",\r
    title: "Mushrooms",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",\r
    title: "Tomato basil",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",\r
    title: "Sea star",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",\r
    title: "Bike",\r
  },\r
];\r
\r
const itemData2 = [\r
  {\r
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",\r
    title: "Bed",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",\r
    title: "Kitchen",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",\r
    title: "Sink",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",\r
    title: "Books",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",\r
    title: "Chairs",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",\r
    title: "Candle",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",\r
    title: "Laptop",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",\r
    title: "Doors",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",\r
    title: "Coffee",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",\r
    title: "Storage",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",\r
    title: "Coffee table",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",\r
    title: "Blinds",\r
  },\r
];\r
const itemData3 = [\r
  {\r
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",\r
    title: "Bed",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",\r
    title: "Books",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",\r
    title: "Sink",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",\r
    title: "Kitchen",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",\r
    title: "Blinds",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",\r
    title: "Chairs",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",\r
    title: "Laptop",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",\r
    title: "Doors",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",\r
    title: "Coffee",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",\r
    title: "Storage",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",\r
    title: "Candle",\r
  },\r
  {\r
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",\r
    title: "Coffee table",\r
  },\r
];\r
\r
export default MuiImageList;\r
`;export{t as default};
