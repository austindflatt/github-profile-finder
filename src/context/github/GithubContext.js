import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = `https://api.github.com`;

export const GithubProvider = ({ children }) => {
  const initialState = {
	users: [],
  user: {},
  repos: [],
	loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get inital users
  const searchUsers = async (text) => {
	  setLoading()
    const params = new URLSearchParams({
      q: text,
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  }

  // Get single user
  const getUser = async (login) => {
	  setLoading(true)
    
    const response = await fetch(`${GITHUB_URL}/users/${login}`);

    if(response.status === 404){
      window.location = '/404'
    } else {
      const data = await response.json();
      dispatch({
        type: 'GET_USER',
        payload: data
      })
    }
  }

  // Get user repos
  const getRepos = async (login) => {
	  setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
    const data = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data
    })
  }

  // Clear state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return <GithubContext.Provider value={{ 
    users: state.users, 
    loading: state.loading, 
    user: state.user,
    repos: state.repos,
    searchUsers, 
    clearUsers,
    getUser,
    getRepos,
    }}>
	  {children}
  </GithubContext.Provider>
}

export default GithubContext