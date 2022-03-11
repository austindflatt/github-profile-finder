import axios from 'axios'

// Create an instance of axios
const instance = axios.create({
  baseURL: 'https://api.github.com',

})

// Get inital users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
	q: text,
  })

  const response = await instance.get(`/search/users?${params}`)
  return response.data.items
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  // Takes in an array of requests
  const [user, repos] = await Promise.all([
    instance.get(`/users/${login}`),
    instance.get(`/users/${login}/repos`)
  ])

  return {
    user: user.data,
    repos: repos.data,
  }
}