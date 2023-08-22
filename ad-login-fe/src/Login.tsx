import {
  Avatar, Box, Button, Container, CssBaseline, TextField, Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import React from 'react';

type FormValues = {
    user: string,
    password: string
}
const Login: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      user: '',
      password: '',
    },
  });

  const { errors } = formState;

  const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate('/todo');
  };

  return <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
        >
            <Avatar sx={{
              m: 1, bgcolor: 'secondary.main',
            }}>
                {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{
              mt: 1,
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    label="User"
                    autoFocus
                    {...register('user', { required: 'User is required' })}
                    error={!!errors.user}
                    helperText={errors.user?.message}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3, mb: 2,
                    }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    </Container>;
};

export default Login;
