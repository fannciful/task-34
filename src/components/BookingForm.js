import React from 'react';
import { Field, Form } from 'react-final-form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchHotels } from '../redux/slices/hotelsSlice';

export default function BookingForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    dispatch(fetchHotels(values));
    navigate('/hotels');
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography variant="h6">Book Your Hotel</Typography>
          <Field name="destination" validate={(value) => (value ? undefined : 'Required')}>
            {({ input, meta }) => (
              <TextField
                {...input}
                label="Destination"
                variant="outlined"
                error={meta.touched && meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Box>
      )}
    />
  );
}
