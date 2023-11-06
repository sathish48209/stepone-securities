import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { sectionHeaderStyles } from "../../styles/Shared";
import { Scale } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const KnowledgeBaseSection = () => {
  const theme = useTheme();
  const renderKnowledgeBaseCard = ({
    title,
    details,
    imgUrl,
  }: {
    title: string;
    details: string;
    imgUrl: string;
  }) => (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        // flex: "0 0 auto",
        width: "33.33333333%",
      }}
    >
      <Box
        component="img"
        src={imgUrl}
        sx={{
          height: "15rem",
          transitionDuration: ".3s",
          maxWidth: "100%",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(0.9)",
          },
        }}
      />
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "#2b2c2d",
            padding: "2rem 10px 0.6rem",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            WebkitLineClamp: 2,
            overflow: "hidden",
            display: "-webkit-flex",
            // color: "#224b8b",
            fontWeight: 500,
            color: "#7a7a7a",
            /* webkitLineClamp: 2,
            webkitBoxOrient: "vertical",
            display: "-webkit-box",
            fontSize: "1.1rem",
            fontWeight: 500,
            overflow: "hidden",
            width: "300px", */
          }}
        >
          {details}
        </Typography>
      </Box>
    </Stack>
  );
  return (
    <Box
      sx={{ padding: "3rem 0", backgroundColor: theme.palette.primary.light }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "relative",
          // zIndex: 100,
          // "& > div": { width: "20%" },
          // "& > div:nth-child(even)": {
          //   mt: 9,
          // },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            ...sectionHeaderStyles,
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Knowledge Base
        </Typography>
        <Stack
          direction="row"
          gap={3}
          sx={{
            marginTop: "1.5rem",
          }}
        >
          {/* {renderKnowledgeBaseCard({
            title: "Market Morning Notes For 6th Nov 2023 - Fintoo Blog",
            details:
              "Markets extended gains in line with positive global cues after the U.S. Fed maintained its stance on interest rates.",
            imgUrl: "",
          })} */}
          {renderKnowledgeBaseCard({
            title: "Market Morning Notes For 6th Nov 2023 - Fintoo Blog",
            details:
              "Markets extended gains in line with positive global cues after the U.S. Fed maintained its stance on interest...",
            imgUrl: "/images/knowledgeBase-Section/card1.jpeg",
          })}
          {renderKnowledgeBaseCard({
            title: "Market Morning Notes For 3rd Nov 2023 - Fintoo Blog",
            details:
              "Markets on Thursday reacted positively to U.S Fed rate pause which helped Nifty reclaim closing above...",
            imgUrl: "/images/knowledgeBase-Section/card2.jpeg",
          })}
          {renderKnowledgeBaseCard({
            title: "Market Morning Notes For 2nd Nov 2023 - Fintoo Blog",
            details:
              "Markets succumbed to selling pressure on Wednesday ahead of the FOMC monetary policy meeting with...",
            imgUrl: "/images/knowledgeBase-Section/card3.jpeg",
          })}
        </Stack>
        <Box sx={{ paddingTop: "2rem" }}>
          <Button
            variant="contained"
            sx={{
              alignSelf: "center",
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 400,
              px: 4,
              py: 2,
            }}
          >
            Read More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default KnowledgeBaseSection;
