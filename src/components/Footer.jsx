import { Typography, Paper } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        py: 2.5,
        px: 3,
        mt: 6,
        mb: 2,
        backgroundColor: "#ffffff",
        borderRadius: "8px",
      }}
    >
      <Typography 
        variant="body2" 
        sx={{
          color: "#000000",
          fontWeight: 400,
          textAlign: "left",
        }}
      >
        © 2023 UPT INFORMATIKA - Politeknik Astra. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
