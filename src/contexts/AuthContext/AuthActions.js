export const login_success = (user) => {
    const action = {
        type: "LOGIN_SUCCESS",
        payload: user
    }
    return action
}

export const login_failure = () => {
    const action = {
        type: "LOGIN_FAILURE"
    }
    return action
}