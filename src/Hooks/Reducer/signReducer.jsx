export const INITIAL_STATE = {
    data: [],
    user: {
        name: "",
        surname: "",
        birthDate: "",
        email: "",
        password: "",
        telno: "",
    },
    loading: false,
    emailUnique: true,
    term: false,
    message: {
        color: "",
        text: "",
        icon: "",
    }
}

export const SET_DATA = "SET_DATA";
export const SET_USER = "SET_USER";

export const VALIDATION_PROCESS = "VALIDATION_PROCESS";
export const VALIDATION_SUCCESS = "VALIDATION_SUCCESS";
export const VALIDATION_FAIL = "VALIDATION_FAIL";

export const EMAIL_IS_NOT_UNIQUE = "EMAIL_IS_NOT_UNIQUE";
export const EMAIL_EXIST = "EMAIL_EXIST";

export const MISSING_INPUTS = "MISSING_INPUTS";

export const signReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.name]: action.payload.value,
                },
            }
        case EMAIL_IS_NOT_UNIQUE:
            return {
                ...state,
                emailUnique: action.payload,
                message: action.payload.message,
            }
        case EMAIL_EXIST:
            return {
                ...state,
                loading: false,
                message: {
                    color: "orange",
                    text: "This e-mail is already used",
                    icon: "warning",
                },
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
                message: {
                    color: "green",
                    text: "Registered successfully",
                    icon: "success",
                },
            }
        case VALIDATION_FAIL:
            return {
                ...state,
                loading: false,
                message: {
                    color: "orange",
                    text: "Information's are not valid",
                    icon: "warning",
                }
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