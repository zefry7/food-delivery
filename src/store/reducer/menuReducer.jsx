const defaultValue = {
    typeMenu: 1800
}

const reducerMenu = (state = defaultValue, action) => {
    switch(action.type) {
        case "edit": 
            return {...state, typeMenu: action.value}
        default:
            return state
    }
}

export default reducerMenu