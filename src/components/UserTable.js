import React, { Component } from "react";
import { Table } from "antd";
import { Consumer } from "../context";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    render: text => <p>{text}</p>
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    render: text => <p>{text}</p>
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: text => <p>{text}</p>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    render: text => <p>{text}</p>
  },
  {
    title: "Hobby",
    dataIndex: "hobby",
    key: "hobby",
    render: text => <p>{text}</p>
  }
];

class UserTable extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { users } = value;
          return (
            <div className="table-padding">
              <Table columns={columns} dataSource={users} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default UserTable;
