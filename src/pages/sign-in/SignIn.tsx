/*
yarn add formik
yarn add yup
*/
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SignInForm from "./SignInForm";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const handleSignIn = (values: { email: string; password: string }) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Container component="main" maxWidth="xs">
      <SignInForm handleSignIn={handleSignIn} />
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
