
//initialeSate
const initialeState = { logged: false }

//action

const loggedIn = { type: "login" };
const loggedOut = { type: "logout" };

export {loggedIn,loggedOut}

//reducer
const loggedReducer = (state = initialeState, action) => {
    switch (action.type) {
        case "login":
            return { ...state, logged: true };
        case "logout":
            return { ...state, logged: false };
        default:
            return state;
    }
}
export {loggedReducer};