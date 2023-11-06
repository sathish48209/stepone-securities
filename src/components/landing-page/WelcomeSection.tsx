import { Box, Container, Stack, Typography } from "@mui/material";
import { useTypingEffect } from "../../hooks/typing-effect";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const texts = [
  "I need advice on investment",
  "Looking for advice on personal tax",
  "Help me with money management",
  "Need advice on goals",
];

const WelcomeSection = () => {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);

  const onTextAnimationEnd = () => {
    if (currentTextIdx + 1 === texts.length) {
      setCurrentTextIdx(0);
    } else {
      setCurrentTextIdx((currentTextIdx) => currentTextIdx + 1);
    }
  };

  let welcomeText = useTypingEffect(
    texts[currentTextIdx],
    200,
    onTextAnimationEnd
  );

  return (
    <Box component="section">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.25,
          // "& > div": { width: "20%" },
          // "& > div:nth-child(even)": {
          //   mt: 9,
          // },
          alignItems: "center",
          justifyContent: "center",
          padding: "13rem 0",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#111",
            fontSize: "48px",
            fontWeight: 500,
            letterSpacing: "-.02em",
          }}
        >
          Wealth and Tax Advice on the go
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#41424d", fontSize: "1.4rem" }}
        >
          How may I make your day special Today?
        </Typography>

        <Stack
          flexDirection="row"
          alignItems="center"
          gap={2}
          sx={{
            background: "#f5f7f9",
            border: "1px solid #f3f3f3",
            borderRadius: "45px",
            color: "#41424d",
            cursor: "pointer",
            display: "flex",
            height: "60px",
            margin: "2.4rem auto auto",
            maxWidth: "500px",
            width: "50%",
            px: 2,
          }}
        >
          <SearchIcon
            color="primary"
            sx={{
              fontSize: "2rem",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              borderRight: "1px solid #000",
              color: "#41424d",
              cursor: "pointer",
              fontSize: "22px",
              height: "22px",
              lineHeight: "21px",
            }}
          >
            {welcomeText}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
