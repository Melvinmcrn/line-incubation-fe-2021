import React from "react";
import { Layout } from "antd";

import SendMelodyPage from "./views/LINEMelody/SendMelodyPage";

import "antd/dist/antd.css";

const { Content, Header } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{height: "100vh"}}>
        <Header>Header</Header>
        <Content>
          <SendMelodyPage />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
