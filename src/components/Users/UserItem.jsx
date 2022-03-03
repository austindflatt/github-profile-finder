import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

function UserItem({ user: { login, avatar_url } }) {
  return (
	<Item>
		<Avatar
        alt="Remy Sharp"
        src={avatar_url}
        sx={{ width: 56, height: 56 }}
		/>
		{login}
		<Link
		to={`/users/${login}`}
		>
			Visit Profile
		</Link>
	</Item>
  )
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem