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
    }else{
        return state
    }
}

export default AuthReducer