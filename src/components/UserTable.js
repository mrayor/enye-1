import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

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
    title: "Date of Birth",
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

const UserTable = () => {
  const users = useSelector(state => state.user.users);
  return (
    <div className="table-padding">
      <Table columns={columns} dataSource={users} pagination={false} />
    </div>
  );
};

export default UserTable;
