import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "./actionTypes";

const defaultState = {
    inputValue: "",
    list: ["喵吉!嘻嘻", "凡客体饭卡", "艾跃进中"],
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
        //console.log(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }

    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));

        newState.list.splice(action.value, 1);
        return newState;
    }

    return state;
};
