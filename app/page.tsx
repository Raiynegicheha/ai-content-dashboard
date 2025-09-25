"use client";

import { Button, TextField, Container, Typography, Link } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen w-full flex-row">
      {/* Left side: Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <Container maxWidth="sm" className="bg-white p-10 rounded-xl shadow-lg">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
            gutterBottom
            className="text-center"
          >
            AI Content Dashboard
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Login to you AI content dashboard
          </Typography>
          <form className="space-y-4 mt-6">
            <TextField label="Email" fullWidth type="email" />
            <TextField label="Password" type="password" fullWidth margin="normal"/>
            <div className="flex justify-end">
              <Link href="#" underline="hover" className="text-sm">
                Forgot Password?
              </Link>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              className="rounded-lg py-2"
              fullWidth
            >
              Login
            </Button>
          </form>

          <Typography
            variant="body2"
            align="center"
            className="mt-4 text-gray-500"
          >
            Don&apos;t have an account?{" "}
            <Link href="#" underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Container>
      </div>
      {/* Right side: Image */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center">
        <Typography variant="h3" fontWeight="bold" className="text-white p-8">
          Empower Your Content Creation with AI
        </Typography>
        {/* You can replace the text above with an actual image if desired */}
        {/* <img src="/login-image.jpg" alt="Login Image" className="w-full h-full object-cover" /> */}
      </div>
    </div>
  );
}
