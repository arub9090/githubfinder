import { createContext, useReducer } from "react";
import uniAlertreducer from './UniAlertReducer'

const UniAlertContext = createContext();

export const UniAlertProvider=({children})=> {

    const initialState = null;

    const [state, dispatch] = useReducer(uniAlertreducer, initialState);

    const setUniAlert=(mmssg, type)=>{
        dispatch({
            type: 'GET_ALERT',
            payload: {mmssg, type},
        })

        setTimeout(() => {
            dispatch({
                type: 'CLEAR_ALRT'
            })
        }, 3000);
    }

    return (
        <UniAlertContext.Provider value={{uniAlert: state, setUniAlert}}>{children}</UniAlertContext.Provider>
    )

}


export default UniAlertContext;