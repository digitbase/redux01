import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import TodoListUI from "./TodoListUI";
//import { Input, Button, List } from "antd";

import store from "./store";
import {
    changeInputAction,
    delItemAction,
    addItemAction,
    getListAction,
    getTodoList,
} from "./store/actionTypes";

import Axios from "axios";
import { act } from "react-dom/test-utils";

class TodoList extends Component {
    constructor(props) {
        super(props);
        //console.log(store.getState());
        this.state = store.getState();
        this.clickBtn = this.clickBtn.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.delItem = this.delItem.bind(this);

        store.subscribe(this.storeChange);
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action);
    }
    delItem(index) {
        console.log(index);
        const action = delItemAction(index);
        store.dispatch(action);
    }
    clickBtn() {
        const action = addItemAction();
        this.setState.inputValue = "123";
        store.dispatch(action);
    }
    inputChange(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    storeChange() {
        this.setState(store.getState());
    }
    render() {
        return (
            <Fragment>
                <TodoListUI
                    inputValue={this.state.value}
                    inputChange={this.inputChange}
                    clickBtn={this.clickBtn}
                    list={this.state.list}
                    delItem={this.delItem}
                />
            </Fragment>
        );
    }
}

export default TodoList;
