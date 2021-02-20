import React, { useCallback, useEffect, useState } from "react";
import { Avatar, Button, List, message } from "antd";

import {
  getFriends,
  getMelodyOwnership,
  sendMelodyToUser,
} from "api/LINEMelody";
import { FriendData } from "utils/interface";

type Props = {
  melodyId: number;
};

const FriendList: React.FC<Props> = ({ melodyId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [friends, setFriends] = useState<FriendData[]>([]);

  const handleSendMelody = async (user: FriendData) => {
    try {
      const status = await getMelodyOwnership(user.userId, melodyId);
      if (status === "available") {
        await sendMelodyToUser(user.userId, melodyId);
        message.success("Sent!");
      } else if (status === "unavailable") {
        message.error(`${user.displayName} has owned this melody!`);
      }
    } catch (error) {
      message.error("Something went wrong!");
      console.error(error);
    }
  };

  const fetchFriends = useCallback(async () => {
    try {
      setIsLoading(true);
      const responseData = await getFriends();
      setFriends(responseData);
      setIsLoading(false);
    } catch (error) {
      message.error("Something when wrong.");
    }
  }, [setFriends]);

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);

  return (
    <>
      <List
        loading={isLoading}
        dataSource={friends}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                loading={isLoading}
                onClick={() => handleSendMelody(item)}
              >
                Send
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.pictureUrl} />}
              title={item.displayName}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default FriendList;
