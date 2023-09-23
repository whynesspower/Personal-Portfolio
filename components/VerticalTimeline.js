import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import DeveloperBoardOutlinedIcon from "@mui/icons-material/DeveloperBoardOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import PhonelinkRoundedIcon from "@mui/icons-material/PhonelinkRounded";
import styles from "../styles/Home.module.scss";

export default function CustomizedTimeline() {
  return (
    <Timeline position="right">
      {/* <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          Aug 2023 - September 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error">
            <DvrOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Electrosine Technologies
          </Typography>
          <Typography>SDE Intern </Typography>
        </TimelineContent>
      </TimelineItem> */}

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          Aug 2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error">
            <DvrOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            style={{ fontSize: "1rem" }}
          >
            Electrosine Tech
          </Typography>
          <div className={styles.subtitle}> SDE Intern</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          May 2023 - Aug 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <Typography
            style={{ fontSize: "1rem" }}
            variant="h6"
            component="span"
          >
            EdYoda Labs | On-Site, Bangalore
          </Typography>
          <div className={styles.subtitle}>Summer SDE Intern</div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          Feb 2023 - May 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="warning">
            <PhonelinkRoundedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "white" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <Typography
            style={{ fontSize: "1rem" }}
            variant="h6"
            component="span"
          >
            Baby Steps
          </Typography>
          <div className={styles.subtitle}>Technical Lead</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          July 2022 - Aug 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "white" }} />
          <TimelineDot color="error">
            <DeveloperBoardOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px", px: 2 }}>
          <Typography
            style={{ fontSize: "1rem" }}
            variant="h6"
            component="span"
          >
            Outshade Digital Media
          </Typography>
          <div className={styles.subtitle}>Full Stack Developer Intern</div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="white"
        >
          Oct 2021 - April 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "white" }} />
          <TimelineDot color="primary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            style={{ fontSize: "1rem" }}
            variant="h6"
            component="span"
          >
            Excellence Tutorials
          </Typography>
          <div className={styles.subtitle}>Software Instructor</div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
