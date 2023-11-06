import { Box, Typography } from "@mui/material";
import { url } from "inspector";
import React, { ReactNode } from "react";

const DetailsCard: React.FC<{
  title: string;
  details: ReactNode;
  bgImg?: string;
  size?: "md" | "lg";
}> = ({ title, details, bgImg, size = "lg" }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        backgroundImage: bgImg,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 0,
        backgroundSize: "contain",
        border: "0 solid #f5f5f5",
        borderRadius: "5px 5px 5px 5px",
        boxShadow: "0 10px 60px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          padding: size === "lg" ? "130px 20px 65px" : "74px 18px 32px 18px",
          "& p": {
            color: "#333",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "26px",
          },
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 400,
            p: 0,
          }}
        >
          {title}
        </Typography>
        {details}
      </Box>
    </Box>
  );
};

export default DetailsCard;
