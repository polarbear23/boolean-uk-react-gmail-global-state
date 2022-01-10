import { createContext } from "react";
import initialEmails from "./data/emails"

export const initialState = {
    currentTab: "",
    emails: [...initialEmails]
}
export const StoreContext = createContext();

export const emailsReducer = (state, action) => {
    switch (action.type) {
        case 'updateEmail':
            const updatedEmails = action.payload(state);
            return updatedEmails;
        default:
            return state;
    }
}

export const tabReducer = (state, action) => {
    switch (action.type) {
        case 'updateTab':
            const updatedTab = action.payload;
            return updatedTab;
        default:
            return state;
    }
}

const combineReducers = reducers => {
    return (state = {}, action) => {
        const newState = {}
        for (let key in reducers) {
            console.log("test", reducers[key])
            console.log("test2", state[key])
            newState[key] = reducers[key](state[key], action)
        }
        return newState
    }
}

export const rootReducer = combineReducers({
    currentTab: tabReducer,
    emails: emailsReducer
})
