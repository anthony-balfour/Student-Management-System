import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';
import "./studentForm.css";

export default function StudentForm() {

  const baseURL = "http://3.14.251.109:8081/student";

  const paperStyle = {padding: '50px 20px', width: 600, margin: '20px auto'}

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  // students display in the system
  const [students, setStudents] = useState([]);

  const handleSubmitClick = (event) => {
    event.preventDefault();
    const student = {name, address}
    fetch(baseURL + "/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(student)
    }).then(() => {
      // clearing text fields
      setName("");
      setAddress("");
    });
  }

  // populating the students in the database with useEffect
  useEffect(() => {
    fetch(baseURL + "/getAll")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      })
  }, [students]);

  return (
    <Box
      className="flex"
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <Container className="form-container">
        <Paper className="paper" elevation = {3}>
          <h1>Add Student</h1>
          <TextField id="filled-basic" label="Student Name" variant="filled" fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
          <TextField id="filled-basic" label="Student Address" variant="filled" fullWidth
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          />
          <div className='flex'>
            <Button id="button" variant="contained" color="primary" onClick={handleSubmitClick}>Submit</Button>
          </div>
        </Paper>
        <Paper className="paper" elevation={3}>
        <h1>Students</h1>
          {students.map(student => {
            return (
            <Paper elevation={6} key={student.id} style={{margin:"10px", padding: "15px", textAlign: "left"}}>
              <p><b>Id:</b> {student.id}</p>
              <p><b>Name:</b> {student.name}</p>
              <p><b>Address:</b> {student.address}</p>
            </Paper>
            )
          })}
        </Paper>
      </Container>
    </Box>
  );
}