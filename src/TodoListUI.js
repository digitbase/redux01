import React, { Component } from "react";
import { Input, Button, List } from "antd";

class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: 10 }}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        onChange={this.props.inputChange}
                        placeholder="write something"
                        style={{ width: "250px", marginRight: 10 }}
                    />
                    <Button onClick={this.props.clickBtn} type="primary">
                        增加
                    </Button>
                </div>
                <div style={{ margin: "10px", width: "300px" }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item
                                key={index}
                                onClick={() => {
                                    this.props.delItem(index);
                                }}
                            >
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoListUI;
