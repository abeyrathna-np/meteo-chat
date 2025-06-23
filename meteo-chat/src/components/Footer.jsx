import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        py: 2,
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Nuwan Abeyrathna
      </Typography>
    </Box>
  );
}