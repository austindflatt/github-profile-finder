import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import List from '@mui/material/List'


const RepoList = ({ repos }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {repos.map((repo) => (
          <>
          <RepoItem key={repo.id} repo={repo} />
          </>
        ))}
    </List>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,

}

export default RepoList