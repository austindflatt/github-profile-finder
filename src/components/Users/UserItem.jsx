import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'left',
	color: theme.palette.text.secondary,
}));

function UserItem({ user: { login, avatar_url, hireable } }) {
  return (
	<Item>
		<Avatar
        alt={login}
        src={avatar_url}
        sx={{ width: 60, height: 60 }}
		/>
		<br />
		<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
			<Chip label={login} variant="outlined" />
			{hireable && (
				<Chip label='Hireable' color='success' variant="outlined" />
            )}
		</Stack>
		<br />
		<Stack spacing={1} direction="row" style={{margin: 'auto', display: 'block'}}>
			<Button component={Link} to={`/user/${login}`} color="secondary" variant="outlined">Profile</Button>
    	</Stack>
	</Item>
  )
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem