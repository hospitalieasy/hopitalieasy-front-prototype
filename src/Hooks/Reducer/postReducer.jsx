export const INITIAL_STATE = {
    loading: true,
    apiPost: {},
    error: false,
}

export const apiPostReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                apiPost: action.payload,
                error: false,
            }

        case "FETCH_ERROR":
            return {
                loading: false,
                apiPost: {},
                error: true,
            }

        default: return state;
    }
}


