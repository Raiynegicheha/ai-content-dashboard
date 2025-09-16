"use client";

import { Button, TextField, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <Container maxWidth="sm" className="flex flex-col items-center mt-20">
      <Typography variant="h4" gutterBottom>AI Content Dashboard</Typography>
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleLogin} className="mt-4">
        Login
      </Button>
    </Container>
  );
}
