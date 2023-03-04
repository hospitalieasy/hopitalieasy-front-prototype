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
            }
        case VALIDATION_ERROR:
            return {
                ...state,
                loading: false,
                message: {
                    color: "red",
                    text: "Information's are not valid",
                    icon: "warning",
                }
            }
        default: return state;
    }
}