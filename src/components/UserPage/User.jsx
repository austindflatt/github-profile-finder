import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
	getUser(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    company,
    blog,
    location,
    hireable,
    bio,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    created_at,
  } = user;

  if(loading){
    return <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block'}}>
    <CircularProgress />
    </Box>
  }

  return (
	  <>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">
          <Avatar
            alt={login}
            src={avatar_url}
            sx={{ width: 250, height: 250 }}
		      />
          </Box>
          <Box gridColumn="span 3">
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                {name}
                <Chip label={type} color="secondary" />
                {hireable && (
                  <Chip label="Hireable" color="success" />
                )}
              </Stack>
            </Stack>
            {bio}
            <Stack spacing={2} direction="row">
      		    <Button href={html_url} target='_blank' color="secondary" variant="outlined">Visit GitHub Profile</Button>
    	      </Stack>
          </Box>
          <Box gridColumn="span 8">
            <Chip label={user.login} variant="outlined" />
          </Box>
        </Box>
      </Box>
      
      <br />
    </>
  )
}

export default User