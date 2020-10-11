import React from "react";
import NavBar from "../components/NavBar";
import { Layout } from "antd";
const { Content } = Layout;

const LandingPage = () => {
  return (
    <Layout>
      <NavBar />
      <Content className="mainContent">
        <h2>hi</h2>
      </Content>
    </Layout>
  );
};

export default LandingPage;
