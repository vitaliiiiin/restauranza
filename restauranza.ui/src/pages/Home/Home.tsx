import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h2" mt={4}>
          Restauranza
        </Typography>
        <Typography align="center" variant="h5" component="h5" mt={3}>
          Time is valuable.
        </Typography>
        <Typography align="center" variant="h5" component="h5">
          Pre-order food with us!
        </Typography>
        <Button variant="contained" sx={{ marginTop: 6 }}>
          Log in
        </Button>
        <Button variant="contained" sx={{ marginTop: 4 }}>
          Register
        </Button>
      </Box>
    </Container>
  );
}