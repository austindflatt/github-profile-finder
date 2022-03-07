import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserSearch = () => {
  const [text, setText] = useState('')
  
  const handleChange = (event) => setText(event.target.value)

  return (
  <Box
  sx={{
	width: 500,
	maxWidth: '100%',
  }}
  >
  <Stack spacing={1} direction="row">
  <TextField
  fullWidth
  id="fullWidth"
  color="secondary"
  label="Search for a username"
  value={text}
  onChange={handleChange}
  />
  <Button variant="outlined" color="warning">Clear</Button>
  </Stack>
  </Box>
  )
}

export default UserSearch