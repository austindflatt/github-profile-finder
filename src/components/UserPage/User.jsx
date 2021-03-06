import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import { getUserAndRepos } from '../../context/github/GithubActions'
import RepoList from '../Repos/RepoList'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import PeopleIcon from '@mui/icons-material/People'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LanguageIcon from '@mui/icons-material/Language'
import TwitterIcon from '@mui/icons-material/Twitter'
import AssessmentIcon from '@mui/icons-material/Assessment'


const User = () => {
  const {user, loading, repos, dispatch } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login)
      dispatch({  type: 'GET_USER_AND_REPOS', payload: userData })
    }
    getUserData()
  }, [dispatch, params.login])

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
  } = user;

  if(loading){
    return <Box sx={{ display: 'flex' }} style={{width: '100px', margin: 'auto', display: 'block'}}>
    <CircularProgress />
    </Box>
  }

  return (
	  <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={12} md={6} lg={4}>

        <Avatar
          alt={login}
          src={avatar_url}
          sx={{ width: 250, height: 250 }}
		    />

        <br />

        <Chip label={user.login} variant="outlined" />

        <br /><br />

        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <Chip label={type} color="secondary" variant="outlined" />
              {hireable && (
                <Chip label="Hireable" color="success" variant="outlined" />
              )}
          </Stack>
        </Stack>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PeopleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Followers" secondary={followers} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PeopleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Following" secondary={following} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AssessmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Public Repositories" secondary={public_repos} />
          </ListItem>
          {company && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CorporateFareIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Company" secondary={company} />
          </ListItem>
          )}
          {location && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary={location} />
          </ListItem>
          )}
          {blog && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LanguageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Website" secondary={blog} />
          </ListItem>
          )}
          {twitter_username && (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TwitterIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Twitter" secondary={twitter_username} />
          </ListItem>
          )}
        </List>

        </Grid>

        <Grid item xs={8}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <h1>{name}</h1>
          </Stack>
          <Stack direction="row" spacing={1}>
            {bio && (
              <>
              <p>{bio}</p>
              <br /><br />
              </>
            )}
          </Stack>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button href={html_url} target='_blank' color="secondary" variant="outlined">Visit GitHub Profile</Button>
        </Stack>
        <br />
        <h1>Latest Repositories</h1>

        <RepoList repos={repos} />

        </Grid>

      </Grid>
    </Box>
    </>
  )
}

export default User