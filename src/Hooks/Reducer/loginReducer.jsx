export const INITIAL_STATE = {
    loading: true,
    data: [],
    user: {
        email: "",
        password: "",
    },
    message: {
        color: "",
        text: "",
        icon: "",
    },
}

export const AUTH_PROCESS = "AUTH_PROCESS"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAIL = "AUTH_FAIL"
export const SET_DATA = "SET_DATA"
export const SET_USER = "SET_USER"
export const CLEAN_STATES = "CLEAN_STATES"

export const loginReducer = (state, action) => {
    switch (action.type) {
        case AUTH_PROCESS:
            return {
                ...state,
                loading: action.payload,
            }
        case AUTH_SUCCESS:
            return {
                loading: action.payload.loading,
                message: action.payload.message,
            }
        case AUTH_FAIL:
            return {
                ...state,
                loading: action.payload.loading,
                message: action.payload.message,
            }
        case SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.name]: action.payload.value,
                },
            }
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case CLEAN_STATES:
            return {
                ...state,
                loading: action.payload.loading,
                message: action.payload.message,
            }

        default: return state;
    }
}


