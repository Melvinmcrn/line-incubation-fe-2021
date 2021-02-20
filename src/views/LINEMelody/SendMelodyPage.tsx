import React from "react";
import { Col, Row } from "antd";

import MelodyPreview from "components/LINEMelody/MelodyPreview";
import FriendList from "components/LINEMelody/FriendList";

// We fix the id to be 99 here
const MELODY_ID = 99;

const SendMelodyPage: React.FC = () => {
  return (
    <>
      send melody page
      <Row justify="center">
        <Col flex="500px">
          <MelodyPreview melodyId={MELODY_ID} />
        </Col>
        <Col>
          <FriendList melodyId={MELODY_ID} />
        </Col>
      </Row>
    </>
  );
};

export default SendMelodyPage;
