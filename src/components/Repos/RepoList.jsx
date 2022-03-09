import React from 'react'
import PropTypes from 'prop-types'

const RepoList = ({ repos }) => {
  return (
	<div>RepoList</div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,

}

export default RepoList