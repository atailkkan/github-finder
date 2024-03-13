import React, { useReducer } from "react"
import githubReducer from "./githubReducer"
import githubContext from "./githubContext"
import axios from "axios"

const GithubState = (props) => {
    const initialState = {
        user: {},
        users: [],
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = (keyword) => {
        axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res => {
                dispatch({
                    type: "SEARCH_USERS",
                    payload: res.data.items
                })
            })
    }

    const clearResults = () => {
        dispatch({
            type: "CLEAR_RESULTS"
        })
    }

    const getUser = (username) => {
        axios
            .get(`https://api.github.com/users/${username}`)
            .then(res => dispatch({
                type: "GET_USER",
                payload: res.data
            }))
    }

    const getUserRepos = (username) => {
        axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then(res => dispatch({
            type: "GET_USER_REPOS",
            payload: res.data
          }))
    }

    return (
        <githubContext.Provider value={{ user: state.user, users: state.users, repos: state.repos, searchUsers, clearResults, getUser, getUserRepos }}>
            {props.children}
        </githubContext.Provider>
    )
}

export default GithubState