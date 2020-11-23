import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState();
        this.clickBtn = this.clickBtn.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        //this.delItem = this.delItem.bind(this);
        store.subscribe(this.storeChange);
    }
    delItem(index) {
        console.log(index);
        const action = { type: "delItem", index: index };
        store.dispatch(action);
    }
    clickBtn() {
        const action = { type: "addItem" };
        store.dispatch(action);
    }
    inputChange(e) {
        const action = { type: "changeInput", value: e.target.value };
        store.dispatch(action);
    }

    storeChange() {
        this.setState(store.getState());
    }
    render() {
        return (
            <div style={{ margin: 10 }}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        placeholder="write something"
                        style={{ width: "250px", marginRight: 10 }}
                    />
                    <Button onClick={this.clickBtn} type="primary">
                        增加
                    </Button>
                </div>
                <div style={{ margin: "10px", width: "300px" }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.delItem.bind(this, index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;
