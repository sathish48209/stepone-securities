import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { sectionHeaderStyles } from "../../styles/Shared";
import DetailsCard from "../shared/DetailsCard";
import { useTheme } from "@mui/material/styles";

const InvestSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: theme.palette.primary.light,
        backgroundImage: "url(/images/invest-section/bg.png)",
        backgroundPosition: "0 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      component="section"
    >
      <Typography variant="h6" sx={{ ...sectionHeaderStyles }}>
        Invest
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
          An Investment
          <br />
          Option for Every Goal
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          gap={3}
          sx={{
            "& > *": {
              width: "40%",
            },
          }}
          alignItems="center"
        >
          <Stack gap={3}>
            <DetailsCard
              title="Stock"
              details={<p>Maximum potential for long-term growth.</p>}
              bgImg="url(/images/invest-section/stocks.png)"
              size="md"
            />
            <DetailsCard
              title="IPO"
              details={<p>Invest in young and growing companies.</p>}
              bgImg="url(/images/invest-section/ipo.png)"
              size="md"
            />
            <DetailsCard
              title="Mutual Fund"
              details={<p>Best for beginners and diversification.</p>}
              bgImg="url(/images/invest-section/funds.png)"
              size="md"
            />
          </Stack>

          <Stack gap={3}>
            <DetailsCard
              title="Bonds"
              details={<p>Offers regular and predictable income.</p>}
              bgImg="url(/images/invest-section/bonds.png)"
              size="md"
            />
            <DetailsCard
              title="NRI Desk"
              details={<p>Complete financial solutions for NRIs.</p>}
              bgImg="url(/images/invest-section/nri.png)"
              size="md"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default InvestSection;
