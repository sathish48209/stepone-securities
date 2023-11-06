import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const ScorecardSection = () => {
  const renderScorecard = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "25%",
        backgroundColor: "#fff",
        borderRadius: "15px 15px 15px 15px",
        height: "100%",
        padding: "30px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          alignItems: "center",
          color: "#0483f4",
          display: "flex",
          fontSize: "35px",
          fontWeight: 900,
          justifyContent: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#224b8b",
          fontWeight: 900,
        }}
      >
        {content}
      </Typography>
    </Stack>
  );
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/scorecard-section/bg.jpeg)",
        position: "relative",
      }}
      component="section"
    >
      <Box
        sx={{
          backgroundColor: "#21a6de",
          height: "100%",
          opacity: 0.69,
          position: "absolute",
          transition: ".3s,border-radius .3s,opacity .3s",
          width: "100%",
        }}
        component="div"
      />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "relative",
          zIndex: 100,
          // "& > div": { width: "20%" },
          // "& > div:nth-child(even)": {
          //   mt: 9,
          // },
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: 700,
            padding: "2rem",
          }}
        >
          Global Scorecard
        </Typography>
        <Stack
          direction="row"
          gap={3}
          sx={{
            padding: "0px 0px 50px",
            width: "100%",
          }}
        >
          {renderScorecard({
            title: "8",
            content: "Years of Business",
          })}
          {renderScorecard({
            title: "250+",
            content: "Corporate tie-ups",
          })}
          {renderScorecard({
            title: "300+ cr",
            content: "Assets Under Advisory(AUA)",
          })}
          {renderScorecard({
            title: "1,50,000+",
            content: "Happy Clients",
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default ScorecardSection;
