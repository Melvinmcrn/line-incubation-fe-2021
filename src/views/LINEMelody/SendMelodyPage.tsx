import React from "react";
import { Col, Row } from "antd";

import MelodyPreview from "components/LINEMelody/MelodyPreview";
import FriendList from "components/LINEMelody/FriendList";

// We fix the id to be 99 here
const MELODY_ID = 99;

const SendMelodyPage: React.FC = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col flex="500px" className="content-column">
          <MelodyPreview melodyId={MELODY_ID} />
        </Col>
        <Col
          flex="500px"
          style={{ height: "100%", overflowY: "auto" }}
          className="content-column"
        >
          <FriendList melodyId={MELODY_ID} />
        </Col>
      </Row>
    </>
  );
};

export default SendMelodyPage;
