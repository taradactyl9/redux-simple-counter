const initialState = {
    value: 0,
    color: 'RED'
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    }
    else if (type === "DECREMENT") {
        return {
            value: state.value - 1
        }
    }

    if (type === "QUINTUPLE") {
        return {
            value: state.value + 5
        }
    }
    else if (type === "DEQUINTUPLE") {
        return {
            value: state.value - 5
        }
    }
    /* else if (type === "COLOR") {
        return {
            color: state.color 
        }
    } */

    return state;
}