import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/userActions";

const columns = [
  {
    title: "User ID",
    dataIndex: "key",
    key: "key",
    render: text => <p>{text}</p>
  },
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
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
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
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const usersArray = Object.values(users);
  return (
    <div className="table-padding">
      <Table columns={columns} dataSource={usersArray} pagination={false} />
    </div>
  );
};

export default UserTable;
