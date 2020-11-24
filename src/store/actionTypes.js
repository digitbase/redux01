import Axios from "axios";

export const CHANGE_INPUT = "changeInput";
export const ADD_ITEM = "addItem";
export const DEL_ITEM = "delItem";
export const GET_LIST = "getListAction";
export const GET_TODOLIST = "getTodoList";

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

export const getListAction = (data) => ({
    type: GET_LIST,
    data,
});

export const getTodoList = () => {
    return (dispatch) => {
        Axios.get("https://s.ohltr.com/api/test.php")
            .then((res) => {
                const data = res.data;
                const action = getListAction(data.data);
                dispatch(action);
            })
            .catch((e) => {
                console.log(e);
            });
    };
};
