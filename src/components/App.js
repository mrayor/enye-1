import React from "react";
import { Layout } from "antd";
import "../css/main.css";
import { Provider } from "../context";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Provider>
      <div>
        <Layout>
          <Header className="header">
            <div className="navbar">
              <h1 className="logo">Enye Challenge 1</h1>
            </div>
          </Header>
          <Content className="px-3">
            <UserForm />
            <UserTable />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <p>&copy; Cohort 3, 2019</p>
          </Footer>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
