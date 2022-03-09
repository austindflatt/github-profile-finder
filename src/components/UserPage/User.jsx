import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
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
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import VisibilityIcon from '@mui/icons-material/Visibility'
import StarIcon from '@mui/icons-material/Star'
import InfoIcon from '@mui/icons-material/Info'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import AssessmentIcon from '@mui/icons-material/Assessment'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'


const User = () => {
  const { getUser, user, loading, getRepos, repos } = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
	  getUser(params.login)
    getRepos(params.login)
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
        <Grid item xs={4}>

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
        
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <InsertLinkIcon />
            </ListItemAvatar>
            <ListItemText
              primary="Repo link and name"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <br />
                    <Stack direction="row" spacing={1}>
                      <Chip icon={<VisibilityIcon />} label="20" color='primary' variant="outlined" />
                      <Chip icon={<StarIcon />} label="134" color='success' variant="outlined" />
                      <Chip icon={<InfoIcon />} label="1" color='error' variant="outlined" />
                      <Chip icon={<RestaurantIcon />} label="20" color='warning' variant="outlined" />
                    </Stack>
                  </Typography>
                </React.Fragment>
                }
              />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>


        </Grid>

      </Grid>
    </Box>
    </>
  )
}

export default User