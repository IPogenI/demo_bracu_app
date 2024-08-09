const AuthReducer = (state, action) => {

    if(action.type === "LOGIN_SUCCESS"){
        return {
            user: action.payload,
            error: false
        }
    }else if(action.type === "LOGIN_FAILURE"){
        return {
            user: null,
            error: true
        }
    }else if(action.type === "LOGOUT") {
        return {
            user: null,
            error: false
        }
    }else{
        return state
    }
}

export default AuthReducer