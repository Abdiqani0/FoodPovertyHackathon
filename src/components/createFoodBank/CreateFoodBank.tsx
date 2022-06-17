import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Add } from '@mui/icons-material';
import { useState } from 'react';

const theme = createTheme();

export default function CreateFoodBank() {

    const [name, setName] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [email, setEmail] = useState();
    const [bio, setBio] = useState();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        name && address && email && bio ? (
           'Send to DB' //REPLACE
        ) : null;
    };

    const onChange = (event: any) => {
      event.target.name == 'Name' ? setName(event.target.value) : null;
      event.target.name == 'Email' ? setEmail(event.target.value) : null;
      event.target.name == 'Address' ? setAddress(event.target.value) : null;
      event.target.name == 'Bio' ? setBio(event.target.value) : null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <Add />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add your FoodBank
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} onChange={onChange} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="Name"
                  required
                  fullWidth
                  label="FoodBank Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="Email"
                  type="Email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fbAddress"
                  label="Address"
                  type="Address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  fullWidth
                  rows={3}
                  maxRows={5}
                  label="Bio"
                  name="Bio"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add your FoodBank
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}