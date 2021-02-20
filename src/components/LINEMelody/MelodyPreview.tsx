import React, { useCallback, useEffect, useState } from "react";
import { Card, message, Row, Spin } from "antd";

import { getMelody } from "api/LINEMelody";
import { MelodyData } from "utils/interface";

const { Meta } = Card;

type Props = {
  melodyId: number;
};

const MelodyPreview: React.FC<Props> = ({ melodyId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [melodyData, setMelodyData] = useState<MelodyData>();

  const fetchMelodyData = useCallback(async () => {
    try {
      setIsLoading(true);
      const responseData = await getMelody(melodyId);
      setMelodyData(responseData);
      setIsLoading(false);
    } catch (error) {
      message.error("Something when wrong.");
    }
  }, [setMelodyData, melodyId]);

  useEffect(() => {
    fetchMelodyData();
  }, [fetchMelodyData]);

  return (
    <>
      <Row>
        {!melodyData || isLoading ? (
          <Spin size="large" />
        ) : (
          <Card cover={<img src={melodyData?.coverPic} alt="album cover" />}>
            <Meta title={melodyData?.title} />
            <Row>ศิลปิน {melodyData?.artist.name}</Row>
            <Row>ราคา {melodyData?.price}฿</Row>
          </Card>
        )}
      </Row>
    </>
  );
};

export default MelodyPreview;
