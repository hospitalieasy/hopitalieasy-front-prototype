export const INITIAL_STATE = {
    data: [],
    user: {
        email: "",
        password: "",
    },
    loading: false,
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
                loading: true,
            }
        case AUTH_SUCCESS:
            return {
                loading: false,
                message: {
                    color: "green",
                    text: "Logged Successfully",
                    icon: "success",
                },
            }
        case AUTH_FAIL:
            return {
                ...state,
                loading: false,
                message: {
                    color: "red",
                    text: "Information's are not correct",
                    icon: "error",
                },
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
                loading: false,
                message: {
                    color: "",
                    text: "",
                    icon: "",
                },
            }

        default: return state;
    }
}


