import React from 'react'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function AboutPage() {
  return (
    <>
    <h1>GitHub Profile Finder</h1>
    <p>GitHub Profile Finder is a React app that allows users to search GitHub profiles and see profile details.</p>
    <p>This web application was built by Austin Flatt, using React.js, Material UI, and the GitHub API.</p>
    < br/>
    <Stack spacing={2} direction="row">
      <Button
      href="https://github.com/austindflatt/github-profile-finder"
      target='_blank'
      color='success'
      variant="outlined"
      >
        View Code
      </Button>
      <Button
      href="https://austinflatt.com"
      target='_blank'
      color='secondary'
      variant="outlined"
      >
        My Portfolio
      </Button>
    </Stack>
    </>
  )
}

export default AboutPage