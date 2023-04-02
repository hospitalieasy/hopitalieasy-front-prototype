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

export const SET_DATA = "SET_DATA"
export const SET_USER = "SET_USER"

export const AUTH_PROCESS = "AUTH_PROCESS"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAIL = "AUTH_FAIL"

export const MISSING_INPUTS = "MISSING_INPUTS";

export const loginReducer = (state, action) => {
    switch (action.type) {
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
        case AUTH_PROCESS:
            return {
                ...state,
                loading: true,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
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
        case MISSING_INPUTS:
            return {
                ...state,
                loading: false,
                message: {
                    color: "orange",
                    text: "Please fill the inputs",
                    icon: "warning",
                },
            }

        default: return state;
    }
}


