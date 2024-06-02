const defaultValue = {
    themeFaq: 0,
    
}

const reduceFAQ = (state = defaultValue, action) => {
    switch(action.type) {
        case "changeTheme": 
            return {...state, themeFaq: action.value}
        default:
            return state
    }
}

export default reduceFAQ