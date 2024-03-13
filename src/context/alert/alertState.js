import React, { useReducer } from "react"
import alertReducer from "./alertReducer"
import alertContext from "./alertContext"

const AlertState = (props) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const showAlert = (msg, type) => {
        dispatch({
            type: "SET_ALERT",
            payload: { msg, type }
        })

        setTimeout(() => {
            dispatch({ type: "REMOVE_ALERT" })
        }, 3000);
    }

    return (
        <alertContext.Provider value={{ alert: state, showAlert }}>
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState