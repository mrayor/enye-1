import React from "react";
import { Form, Input, DatePicker, Button, InputNumber, Row, Col } from "antd";
import moment from "moment";
import uuidv5 from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/userActions";

const UserForm = props => {
  const NAMESPACE = "01885526-7341-44a0-9d38-2a7cfdad9ca5";
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      let date = fieldsValue["datePicker"].format("MM-DD-YYYY");
      const newUser = {
        key: uuidv5("usersUUID", NAMESPACE),
        firstName: fieldsValue["firstName"],
        lastName: fieldsValue["lastName"],
        dateOfBirth: date.toString(),
        age: fieldsValue["age"],
        hobby: fieldsValue["hobby"]
      };
      dispatch(addUser(newUser));
      props.form.resetFields();
    });
  };

  const disabledDate = current => {
    return current && current > moment().endOf("day");
  };

  const { getFieldDecorator } = props.form;
  const config = {
    rules: [{ type: "object", required: true, message: "Please select date!" }]
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2 className="subtitle-heading">Kindly fill in your information</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="First Name">
            {getFieldDecorator("firstName", {
              rules: [
                {
                  required: true,
                  message: "Please input your First Name!"
                }
              ]
            })(<Input placeholder="First Name" />)}
          </Form.Item>
          <Form.Item label="Last Name">
            {getFieldDecorator("lastName", {
              rules: [
                {
                  required: true,
                  message: "Please input your Last Name!"
                }
              ]
            })(<Input placeholder="Last Name" />)}
          </Form.Item>
          <Row type="flex" justify="space-between">
            <Col xs={12} md={18}>
              <Form.Item label="Date of Birth">
                {getFieldDecorator("datePicker", config)(
                  <DatePicker
                    className="w-full"
                    showToday={false}
                    format="MM-DD-YYYY"
                    disabledDate={disabledDate}
                  />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Age">
                {getFieldDecorator("age", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Age!"
                    }
                  ]
                })(<InputNumber />)}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Hobby">
            {getFieldDecorator("hobby", {
              rules: [
                {
                  required: true,
                  message: "Please input your Hobby!"
                }
              ]
            })(<Input placeholder="Seperate multiple with commas" />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Form.create({ name: "userForm" })(UserForm);
