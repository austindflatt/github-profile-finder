import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {users.map((user) => (
        <Grid item xs={2} sm={4} md={4} key={null}>
          <h1>{user.login}</h1>
        </Grid>
      ))}
    </Grid>
  )
}

export default UserResults