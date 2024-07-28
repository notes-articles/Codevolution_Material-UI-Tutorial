const n=`import {\r
  Timeline,\r
  TimelineConnector,\r
  TimelineContent,\r
  TimelineDot,\r
  TimelineItem,\r
  TimelineOppositeContent,\r
  TimelineSeparator,\r
} from "@mui/lab";\r
\r
const MuiTimeline = () => {\r
  return (\r
    <div>\r
      {/* position="left" */}\r
      <Timeline position="alternate">\r
        <TimelineItem>\r
          <TimelineOppositeContent color={"text.primary"}>\r
            9:30 am\r
          </TimelineOppositeContent>\r
          <TimelineSeparator>\r
            <TimelineDot color="secondary" variant="outlined" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>City A</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineOppositeContent color={"text.primary"}>\r
            10:30 am\r
          </TimelineOppositeContent>\r
          <TimelineSeparator>\r
            <TimelineDot color="secondary" variant="outlined" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>City B</TimelineContent>\r
        </TimelineItem>\r
        <TimelineItem>\r
          <TimelineOppositeContent color={"text.primary"}>\r
            12:30 am\r
          </TimelineOppositeContent>\r
          <TimelineSeparator>\r
            <TimelineDot color="secondary" variant="outlined" />\r
            <TimelineConnector />\r
          </TimelineSeparator>\r
          <TimelineContent>City C</TimelineContent>\r
        </TimelineItem>\r
      </Timeline>\r
    </div>\r
  );\r
};\r
\r
export default MuiTimeline;\r
`;export{n as default};
