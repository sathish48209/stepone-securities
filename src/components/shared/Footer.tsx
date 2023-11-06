import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import React from "react";

const Footer = () => {
  const LinkStyles = {
    textDecoration: "none",
    color: "#fff",
  };
  const IconStyles = {
    backgroundColor: "hsla(0,0%,100%,.21)",
    borderRadius: "2px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1.1rem",
    margin: "0.4rem",
    padding: "0.4em 0.6em",
    textDecoration: "none",
  };
  return (
    <Box
      sx={{
        backgroundColor: "#001537",
        height: "100%",
        paddingBottom: "2rem",
        width: "100%",
      }}
      component="div"
    >
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "4rem", margin: "auto", display: "flex" }}
      >
        <Stack>
          <Stack display="flex" flexDirection="row" gap={6}>
            <Stack sx={{ width: "25%" }} alignItems="center">
              <Box
                component="img"
                src="/images/footer/Logo.png"
                sx={{ width: "200px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  paddingTop: "0.7rem",
                }}
              >
                +91-9699 800 600
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  paddingTop: "0.7rem",
                }}
              >
                online@stepone.in
              </Typography>
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: "1rem", color: "#fff" }}
              >
                <Link href="#">
                  <IconButton
                    sx={{
                      ...IconStyles,
                    }}
                    size="small"
                  >
                    <TwitterIcon />
                  </IconButton>
                </Link>
                <Link href="#">
                  <IconButton
                    sx={{
                      ...IconStyles,
                    }}
                    size="small"
                  >
                    <FacebookIcon />
                  </IconButton>
                </Link>
                <Link href="#">
                  <IconButton
                    sx={{
                      ...IconStyles,
                    }}
                    size="small"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Link>
                <Link href="#">
                  <IconButton
                    sx={{
                      ...IconStyles,
                    }}
                    size="small"
                  >
                    <InstagramIcon />
                  </IconButton>
                </Link>
                <Link href="#">
                  <IconButton
                    sx={{
                      ...IconStyles,
                    }}
                    size="small"
                  >
                    <YouTubeIcon />
                  </IconButton>
                </Link>
              </Stack>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              gap={6}
              sx={{ width: "75%", flex: 1 }}
            >
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "1.2rem", fontWeight: 500 }}
                >
                  Our Solutions
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: "none",
                    padding: 0,
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      gap: "0.5rem",
                      fontWeight: 300,
                    }}
                  >
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Financial Planning
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Retirement Planning
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Investment Planning
                    </Link>
                  </Box>
                </Box>
              </Stack>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "1.2rem", fontWeight: 500 }}
                >
                  Invest
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: "none",
                    padding: 0,
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      gap: "0.5rem",
                      fontWeight: 300,
                    }}
                  >
                    <Link href="#" sx={{ ...LinkStyles }}>
                      IPO
                    </Link>
                  </Box>
                </Box>
              </Stack>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "1.2rem", fontWeight: 500 }}
                >
                  About Us
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: "none",
                    padding: 0,
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      gap: "0.5rem",
                      fontWeight: 300,
                    }}
                  >
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Safety Shield(Data Privacy)
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      About Us
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Contact Us
                    </Link>
                  </Box>
                </Box>
              </Stack>
              <Stack>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontSize: "1.2rem", fontWeight: 500 }}
                >
                  Others
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: "none",
                    padding: 0,
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      gap: "0.5rem",
                      fontWeight: 300,
                    }}
                  >
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Partner With US
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Privacy Policy
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Terms And Conditions
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Greivance Mechanism
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Complaints Status
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Partner With US
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Investor Charter
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Compliance Audit Status
                    </Link>
                    <Link href="#" sx={{ ...LinkStyles }}>
                      Help Center
                    </Link>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", my: 2 }} />

      <Container maxWidth="lg" sx={{ margin: "auto", display: "flex" }}>
        <Stack>
          <Stack
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{
              color: "#adadad",
              margin: "auto",
              paddingTop: "1rem",
              width: "100%",
            }}
          >
            <Typography variant="body2">
              Financial Hospital Advisor LLP (Brand Name - Fintoo.in, Fintoo
              app, Fintoo) makes no warranties or representations, express or
              implied, on products and services offered through the platform. It
              accepts no liability for any damages or losses, however, caused in
              connection with the use of, or on the reliance of its advisory or
              related services. Past performance is not indicative of future
              returns. Please consider your specific investment requirements,
              risk tolerance, goal, time frame, risk and reward balance and the
              cost associated with the investment before choosing a fund, or
              designing a portfolio that suits your needs. Performance and
              returns of any investment portfolio can neither be predicted nor
              guaranteed. Investments made on advisory are subject to market
              risks, read all scheme related documents carefully. Marketing and
              distribution of various financial products such as Mutual
              Funds,Loans,Insurance,Bonds, Domestic Equity and International
              Equity are powered by Mihika Financial Services Private Limited
              (FintooInvest.in, FintooInvest app, FintooInvest).
            </Typography>
            <Typography variant="body2">
              © FINANCIAL HOSPITAL ADVISOR LLP [SEBI RIA Registration No:
              INA000015756] [BASL Membership ID: 1874] [Type of Registration:
              Non-Individual] [Validity of registration: February 17,
              2021-Perpetual] [Address: Financial Hospital B-404, Kanakia Wall
              Street, Andheri - Kurla Rd, Hanuman Nagar, Andheri East, Mumbai,
              Maharashtra 400093] [Platform Partner : BSE (Member code-10096)]
              [LLP - AAE-1913] [GST No : 27AAEFF2161P1Z6] [Principal Officer
              details : Principal Officer: Mr. Mihir Shah(mihir.shah@fintoo.in)]
              [Corresponding SEBI regional/local office: Plot No. C 4-A , G
              Block, Near Bank of India, Bandra Kurla Complex,Bandra East,
              Mumbai, Maharashtra 400051]
            </Typography>
            <Typography variant="body2" sx={{ alignSelf: "center" }}>
              Copyright © 2023 Fintoo,. All rights reserved
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
