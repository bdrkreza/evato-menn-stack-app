import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setToken } from "../../redux";
import { useTokenMutation } from "../../redux/reducers/user-api";
const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [getUser, { data, isSuccess, isLoading, error }] = useTokenMutation();
  // console.log("error message", error);
  // console.log("token message", data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    if (email && password) {
      await getUser({
        email: email,
        password: password,
      });
    } else {
      toast.error("please fill all input field");
    }
    reset();
  };
  // Cookies.set("user", data?.user);
  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.token));
      router.push("/");
    }
  }, [data, dispatch, isSuccess, router]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="my-5">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              defaultValue={"diureza@gmail.com"}
              label="Email Address"
              {...register("email", { required: true })}
              error={Boolean(errors.email)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              defaultValue={"123456"}
              {...register("password", { required: true })}
              error={Boolean(errors.password)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
