import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
    inputValue: "write somthing",
    list: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }

    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        console.log(action);
        newState.list.splice(action.index, 1);
        return newState;
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    return state;
};
