import React, { Component } from "react";
import { Input, Button, List } from "antd";
import { render } from "@testing-library/react";

const TodoListUI = (props) => {
    return (
        <div style={{ margin: 10 }}>
            <div>
                <Input
                    value={props.inputValue}
                    onChange={props.inputChange}
                    placeholder="write something"
                    style={{ width: "250px", marginRight: 10 }}
                />
                <Button onClick={props.clickBtn} type="primary">
                    增加
                </Button>
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            key={index}
                            onClick={() => {
                                props.delItem(index);
                            }}
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

export default TodoListUI;
