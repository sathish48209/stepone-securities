import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ExpertSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#9fddf9",
        backgroundSize: "cover",
        padding: "2rem 12rem",
        position: "relative",
      }}
      component="section"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "auto",
          justifyContent: "space-between",
          margin: "auto",
          position: "relative",
          width: "100%",
          zIndex: 10,
        }}
        component="div"
      >
        <Stack>
          <Typography
            variant="h6"
            sx={{
              color: "#060606",
              fontSize: "2.5rem",
              fontWeight: 500,
              lineHeight: "3.5rem",
            }}
          >
            StepOne's Expert Advisory
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#050404",
              fontSize: "1.3rem",
              fontWeight: 500,
              letterSpacing: ".5px",
              margin: "1rem 0",
              mb: 1,
            }}
          >
            Don't Wish To Take Any Chances With Your Investment And Future?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#050404",
              fontSize: "1.3rem",
              fontWeight: 500,
              letterSpacing: ".5px",
              m: 0,
              my: 2,
            }}
          >
            Let The Experts Do What They Do Best!
          </Typography>
          <Button
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 400,
              px: 4,
              py: 2,
            }}
          >
            Know More
          </Button>
        </Stack>
        <Stack>
          <Box
            component="img"
            src="/images/expert-section/logoCarrier.png"
            sx={{ width: "100%" }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ExpertSection;
