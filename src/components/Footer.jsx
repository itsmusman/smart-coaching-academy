import { Box, Link, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

// this components' code needs refactoring
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f0f5ff",
        height: "230px",
        paddingTop: 7,
        paddingBottom: 7,
      }}
    >
      {/* Contact Us Section */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "30px",
          justifyContent: "space-between",
          height: "90%",
        }}
      >
        <Typography variant="h6" sx={{ color: "#00366c", fontWeight: "600" }}>
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Link
            component="button"
            variant="body1"
            sx={{
              color: "black",
              fontWeight: "600",
              textDecoration: "none",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            info@smartcoaching.edu.pk
          </Link>
          <Link
            component="button"
            variant="body1"
            sx={{
              color: "black",
              fontWeight: "600",
              textDecoration: "none",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            (042) 111 767 775
          </Link>
          <Link
            component="button"
            variant="body1"
            sx={{
              color: "black",
              fontWeight: "600",
              textDecoration: "none",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            +92 345 0900786
          </Link>
        </Box>
        <Link
          component="button"
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
            maxWidth: "250px",
            textAlign: "left",
          }}
        >
          5/6, D-1 Khayaban-e-Firdousi, Johar Town Lahore, Pakistan
        </Link>
      </Box>

      {/* UseFul Links Section */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          height: "90%",
        }}
      >
        <Typography variant="h6" sx={{ color: "#00366c", fontWeight: "600" }}>
          Useful Links
        </Typography>
        <Link
          component="button"
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          About Us
        </Link>
        <Link
          component="button"
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          Our Projects
        </Link>
        <Link
          component="button"
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          What Makes Us
        </Link>
        <Link
          component="button"
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          Careers
        </Link>
        <Link
          component="button"
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "600",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          Partner with Us
        </Link>
      </Box>

      {/* Follow Us Section */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          height: "70%",
        }}
      >
        <Typography variant="h6" sx={{ color: "#00366c", fontWeight: "600" }}>
          Follow Us
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: "600",
            maxWidth: "250px",
          }}
        >
          Connect with us through social media to keep updated with important
          information.
        </Typography>
        <Box
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FacebookIcon fontSize="large" sx={{ color: "#00366c" }} />
          <LinkedInIcon fontSize="large" sx={{ color: "#00366c" }} />
          <YouTubeIcon fontSize="large" sx={{ color: "#00366c" }} />
          <InstagramIcon fontSize="large" sx={{ color: "#00366c" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
