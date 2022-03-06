import React, { useEffect, useContext } from 'react'
import UserItem from './UserItem'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext)

  useEffect(() => {
    // fetchUsers()
  }, [])

  if(!loading) {
    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {users.map((user) => (
          <Grid item xs={2} sm={4} md={4}>
            <UserItem key={user.id} user={user} />
          </Grid>
        ))}
      </Grid>
    )
  } else {
    return <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      </Box>
  }
}

export default UserResults