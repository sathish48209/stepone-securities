import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { sectionHeaderStyles } from "../../styles/Shared";
import DetailsCard from "../shared/DetailsCard";

const TaxSection = () => {
  return (
    <Box
      sx={{
        py: 5,
        // backgroundColor: "#ebf6fb",
        backgroundImage: "url(/images/invest-section/bg.png)",
        backgroundPosition: "0 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      component="section"
    >
      <Typography variant="h6" sx={{ ...sectionHeaderStyles }}>
        Tax
      </Typography>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          "& > *": {
            width: "50%",
          },
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={3}
          sx={{
            "& > *": {
              width: "40%",
            },
            mx: 3,
          }}
          alignItems="center"
        >
          <Stack gap={2} flexGrow={1}>
            <DetailsCard
              title="NRI Taxation"
              details={
                <p>
                  Efficiently manage NRI taxation with effective expert
                  guidance.
                </p>
              }
              bgImg="url(/images/tax-section/nri.png)"
              size="lg"
            />
          </Stack>
          <Stack gap={3} flexGrow={1} sx={{ mt: 12 }}>
            <DetailsCard
              title="Notices"
              details={
                <p>
                  Get effective resolutions for all types of income tax notices.
                </p>
              }
              bgImg="url(/images/tax-section/notices.png)"
              size="lg"
            />
          </Stack>
        </Stack>
        <Typography
          variant="h3"
          color="primary"
          sx={{
            fontSize: "2.5rem",
            fontWeight: 500,
            lineHeight: "54px",
            margin: 0,
            textShadow: "0 0 0 rgba(0,0,0,.3)",
            textTransform: "capitalize",
          }}
        >
          Minimise Your Taxes,
          <br />
          Maximise Your Savings.
        </Typography>
      </Container>
    </Box>
  );
};

export default TaxSection;
