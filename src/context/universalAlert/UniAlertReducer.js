const uniAlertreducer=(state, action)=>{
    switch (action.type) {
        case 'GET_ALERT':
            return action.payload;
        
            case 'CLEAR_ALRT':
                return null;

    
        default:
            return state;
    }
}

export default uniAlertreducer;