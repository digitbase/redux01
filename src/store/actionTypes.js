export const CHANGE_INPUT = "changeInput";
export const ADD_ITEM = "addItem";
export const DEL_ITEM = "delItem";

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value,
});

export const addItemAction = () => ({
    type: ADD_ITEM,
});

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index,
});
