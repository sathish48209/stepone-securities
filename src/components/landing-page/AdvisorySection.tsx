import { Box, Container, Typography } from "@mui/material";
import React from "react";
import DetailsCard from "../shared/DetailsCard";
import { sectionHeaderStyles } from "../../styles/Shared";

const AdvisorySection = () => {
  return (
    <Box
      sx={{
        py: 8,
      }}
      component="section"
    >
      <Typography variant="h6" sx={{ ...sectionHeaderStyles }}>
        Advisory
      </Typography>

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          gap: 2,
          "& > div": { width: "20%" },
          "& > div:nth-child(even)": {
            mt: 9,
          },
          alignItems: "flex-start",
        }}
      >
        <DetailsCard
          title="Financial Planning"
          details={
            <p>AI-Driven Financial Planning, Achieve Your Financial Goals.</p>
          }
          bgImg="url(/images/advisory-card/financial-planning.png)"
        />
        <DetailsCard
          title="Retirement Planning"
          details={
            <p>
              Don't Retire,
              <br />
              Reboot. Relive. Rejoice.
            </p>
          }
          bgImg="url(/images/advisory-card/retirement-planning.png)"
        />
        <DetailsCard
          title="Investment Planning"
          details={
            <p>
              Don't just SAVE Money,
              <br />
              NURTURE Wealth
            </p>
          }
          bgImg="url(/images/advisory-card/investment-planning.png)"
        />
        <DetailsCard
          title="Tax Planning"
          details={
            <p>
              Minimise your Taxes,
              <br />
              Maximise your Savings.
            </p>
          }
          bgImg="url(/images/advisory-card/tax-planning.png)"
        />
        <DetailsCard
          title="Risk Management"
          details={
            <p>
              What you cannot Predict, <br />
              You can Insure.
            </p>
          }
          bgImg="url(/images/advisory-card/risk-management.png)"
        />
      </Container>
    </Box>
  );
};

export default AdvisorySection;
