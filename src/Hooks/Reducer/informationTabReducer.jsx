export const INITIAL_STATE = {
    data: [],
    user: {
        id: "",
        name: "",
        surname: "",
        birthdate: "",
        email: "",
        password: "",
        telno: "",
    },
    switcher: true,
    visible: false,
    loading: false,
    message: {
        color: "",
        text: "",
        icon: "",
    }
}

export const SET_DATA_TO_USER = "SET_DATA_TO_USER";
export const SET_USER = "SET_USER";
export const SET_VISIBLE = "SET_VISIBLE";
export const VALIDATION_PROCESS = "VALIDATION_PROCESS";
export const VALIDATION_SUCCESS = "VALIDATION_SUCCESS";
export const VALIDATION_ERROR = "VALIDATION_ERROR";
export const CLEAN_STATES = "CLEAN_STATES";

export const informationTabReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA_TO_USER:
            return {
                ...state,
                user: action.payload.user,
            }
        case SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.name]: action.payload.value,
                },
            }
        case SET_VISIBLE:
            return {
                ...state,
                visible: action.payload,
            }
        case VALIDATION_PROCESS:
            return {
                ...state,
                loading: true,
            }
        case VALIDATION_SUCCESS:
            return {
                ...state,
                loading: false,
                visible: false,
                switcher: false,
                message: {
                    color: "green",
                    text: "Information's changed successfully",
                    icon: "success",
                }
            }
        case VALIDATION_ERROR:
            return {
                ...state,
                loading: false,
                message: {
                    color: "orange",
                    text: "Information's are not valid",
                    icon: "warning",
                }
            }
        case CLEAN_STATES:
            return {
                ...state,
                switcher: false,
                visible: false,
                loading: false,
                message: {
                    color: "",
                    text: "",
                    icon: "",
                }
            }

        default: return state;
    }
}