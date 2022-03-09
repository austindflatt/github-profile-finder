import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

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
  } = user

  if(loading){
    return <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block'}}>
    <CircularProgress />
    </Box>
  }

  return (
	<div>{user.login}</div>
  )
}

export default User