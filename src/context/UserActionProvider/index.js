import { createContext } from "react";

export const UserActionContext = createContext(null)

export const UserActionProvider = ({ children }) => {
    const [state, dispatch] = useReducer()

    return (
        <UserActionContext.Provider value={[state, dispatch]}>
            { children }
        </UserActionContext.Provider>
    )
}