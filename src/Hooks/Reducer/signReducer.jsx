export const INITAL_STATE = {
    data: [],
    user: {
        name: "",
        surname: "",
        birthdate: "",
        email: "",
        password: "",
        telno: "",
    },
    loading: false,
    emailUnique: false,
    term: false,
}

export const SET_DATA = "SET_DATA";
export const SET_USER = "SET_USER";
export const IS_EMAIL_UNIQUE = "IS_EMAIL_UNIQUE";
export const VALIDATION_PROCESS = "VALIDATION_PROCESS";
export const SET_TERM = "SET_TERM";

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
        case IS_EMAIL_UNIQUE:
            return {
                ...state,
                emailUnique: action.payload,
            }
        case VALIDATION_PROCESS:
            return {
                ...state,
                loading: true,
            }
        case SET_TERM:
            return {
                ...state,
                term: action.payload,
            }
        default: return state;
    }
}