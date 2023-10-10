import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';

export default function StudentForm() {

  const baseURL = "http://localhost:8080/student";

  const paperStyle = {padding: '50px 20px', width: 600, margin: '20px auto'}

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  // students display in the system
  const [students, setStudents] = useState([]);

  const handleSubmitClick = (event) => {
    event.preventDefault();
    const student = {name, address}
    console.log(student);
    fetch(baseURL + "/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(student)
    }).then(() => {
      console.log("New Student Added")
    });
  }

  // populating the students in the database with useEffect
  useEffect(() => {
    fetch(baseURL + "/getAll")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      })
  }, []);

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
          <Button variant="contained" color="primary" onClick={handleSubmitClick}>Submit</Button>

        </Paper>
        <h1>Students</h1>
        <Paper elevation={3} style={paperStyle}>
          {students.map(student => {
            return (
            <Paper elevation={6} key={student.id} style={{margin:"10px", padding: "15px", textAlign: "left"}}>
              <p>Id: {student.id}</p>
              <p>Name: {student.name}</p>
              <p>{student.address}</p>
            </Paper>
            )
          })}


        </Paper>
      </Container>
    </Box>
  );
}