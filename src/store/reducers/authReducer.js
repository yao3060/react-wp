const initState = {
    isAuthed: false,
    authError: null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {

        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR')
            return {
                ...state,
                isAuthed: false,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('LOGIN_SUCCESS', action)
            return {
                ...state,
                ...action.json,
                isAuthed: true,
                authError: null
            }
        default:
            return state

    }
}

export default authReducer