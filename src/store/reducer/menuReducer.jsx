const defaultValue = {
    typeMenu: 1800,
    typeComplex: 0
}

const reducerMenu = (state = defaultValue, action) => {
    switch(action.type) {
        case "edit": 
            return {...state, typeMenu: action.value};
        case "complex": 
            return {...state, typeComplex: action.value}
        default:
            return state
    }
}

export default reducerMenu