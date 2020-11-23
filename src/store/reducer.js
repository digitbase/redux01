const defaultState = {
    inputValue: "",
    list: ["喵吉嘻嘻", "凡客体饭卡", "艾跃进中"],
};
export default (state = defaultState, action) => {
    if (action.type == "changeInput") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type == "addItem") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        //console.log(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }

    if (action.type == "delItem") {
        let newState = JSON.parse(JSON.stringify(state));

        newState.list.splice(action.value, 1);
        return newState;
    }

    return state;
};
