import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

export default function StudentForm() {

  const paperStyle = {padding: '50px 20px', width: 600, margin: '20px auto'}

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <Container>
        <Paper elevation = {3} style={paperStyle}>
          <h1>Add Student</h1>
          <TextField id="filled-basic" label="Student Name" variant="filled" fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
          <TextField id="filled-basic" label="Student Address" variant="filled" fullWidth
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          />
        </Paper>
      </Container>
    </Box>
  );
}