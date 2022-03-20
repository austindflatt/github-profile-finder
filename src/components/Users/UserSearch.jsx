import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserSearch = () => {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)

  const { setAlert } = useContext(AlertContext)
  
  const handleChange = (event) => setText(event.target.value)

  const handleSubmit = async (event) => {
	event.preventDefault()

	if(text === '') {
		setAlert('Please enter a username', 'error')
	} else {
		dispatch({ type: 'SET_LOADING' })
		const users = await searchUsers(text)
		dispatch({
			type: 'GET_USERS',
			payload: users,
		})
		setText('')
	}
  }

  return (
  <Box
  sx={{
	width: '100%',
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
		<Button variant="outlined" color="warning" onClick={() => dispatch({ type: 'CLEAR_USERS' })}>Clear</Button>
	)}
	</Stack>
  </Box>
  )
}

export default UserSearch