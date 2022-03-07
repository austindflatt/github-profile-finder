import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserSearch = () => {
  const [text, setText] = useState('')

  const { users } = useContext(GithubContext)
  
  const handleChange = (event) => setText(event.target.value)

  const handleSubmit = (event) => {
	event.preventDefault()

	if(text === '') {
		alert('Please enter a username')
	} else {
		// search for users
		setText('')
	}
  }

  return (
  <Box
  sx={{
	width: 500,
	maxWidth: '100%',
  }}
  >
	<Stack spacing={1} direction="row">
	<form onSubmit={handleSubmit} style={{ width: '500px' }}>
	<TextField
	fullWidth
	id="fullWidth"
	color="secondary"
	label="Search for a username"
	value={text}
	onChange={handleChange}
	/>
	</form>
	{users.length > 0 && (
		<Button variant="outlined" color="warning">Clear</Button>
	)}
	</Stack>
  </Box>
  )
}

export default UserSearch