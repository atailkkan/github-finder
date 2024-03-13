const githubReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_USERS":
            return {
                ...state,
                users: action.payload
            }
        case "CLEAR_RESULTS":
            return {
                ...state,
                users: []
            }
        case "GET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "GET_USER_REPOS":
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }
}

export default githubReducer