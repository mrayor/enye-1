import React, { Component } from "react";
import { Form, Input, DatePicker, Button, InputNumber, Row, Col } from "antd";
import { Consumer } from "../context";
import moment from "moment";
import uuid from "uuid";

class UserForm extends Component {
  // getAge = (date, dateString) => {
  //   if (dateString === "") {
  //     return;
  //   }
  //   const { setFieldsValue } = this.props.form;
  //   let today = new Date();
  //   let birthDate = new Date(dateString);

  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   let m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age = age - 1;
  //   }
  //   if (age < 0 || age === 0) {
  //     throw alert("Please select a valid date of birth");
  //   }
  //   setFieldsValue({ age });
  // };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // if (fieldsValue["age"] === 0) {
      //   throw alert("Age cannot be zero");
      // }
      const newUser = {
        key: uuid(),
        date: fieldsValue["datePicker"].format("MM-DD-YYYY"),
        ...fieldsValue
      };
      dispatch({ type: "ADD_USER", payload: newUser });
      this.props.form.resetFields();
    });
  };
  disabledDate = current => {
    return current && current > moment().endOf("day");
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select date!" }
      ]
    };

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="form-card">
                <h2 className="subtitle-heading">
                  Kindly fill in your information
                </h2>
                <Form onSubmit={this.handleSubmit.bind(this, dispatch)}>
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
                            // onChange={this.getAge}
                            disabledDate={this.disabledDate}
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
        }}
      </Consumer>
    );
  }
}
export default Form.create({ name: "userForm" })(UserForm);
