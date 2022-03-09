import React from 'react'
import PropTypes from 'prop-types'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import VisibilityIcon from '@mui/icons-material/Visibility'
import StarIcon from '@mui/icons-material/Star'
import InfoIcon from '@mui/icons-material/Info'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

const RepoList = ({ repos }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {repos.map((repo) => (
          <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <InsertLinkIcon />
            </ListItemAvatar>
            <ListItemText
            primary={repo.name}
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
          </>
        ))}
    </List>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,

}

export default RepoList