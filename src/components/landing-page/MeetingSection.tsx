import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const MeetingSection = () => {
  return (
    <Box sx={{ paddingTop: "4rem" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack display="flex" flexDirection="column">
          <Stack display="flex" alignItems="center" justifyContent="center">
            <Typography
              variant="h6"
              sx={{
                color: "#06aff4",
                fontSize: "2.5rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Confused?
            </Typography>
          </Stack>
          <Stack display="flex" flexDirection="row">
            <Stack display="flex" flexDirection="row" width="50%">
              <Typography
                variant="h6"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  fontSize: "2.5rem",
                  fontWeight: 500,
                  justifyContent: "flex-start",
                  padding: "10rem 0",
                }}
              >
                Introductory call with our Financial Advisor to know more about
                our offerings and advice.
              </Typography>
            </Stack>
            <Stack display="flex" flexDirection="row" width="50%">
              <Typography
                variant="h6"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  fontSize: "2.5rem",
                  fontWeight: 500,
                  justifyContent: "flex-start",
                  padding: "10rem 0",
                }}
              >
                Introductory call with our Financial Advisor to know more about
                our offerings and advice.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MeetingSection;
