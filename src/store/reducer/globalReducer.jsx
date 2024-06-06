const defaultValue = {
    sizeWindow: window.innerWidth, 
}

const reduceGlobal = (state = defaultValue, action) => {
    switch(action.type) {
        case "resize": 
            return {...state, sizeWindow: action.value}
        default:
            return state
    }
}

export default reduceGlobal