import httpClient from "./httpClient";
import { FriendData, MelodyData } from "utils/interface";

interface FriendsResponseData {
  items: FriendData[];
}

const getMelody = async (id: number) => {
  const url = `api/melody/${id}`;
  return await httpClient.get<MelodyData>(url).then((response) => {
    if (response.status === 200 && response.data) {
      return response.data;
    }
    throw Error("[getMelody] Response has no data");
  });
};

const getFriends = async () => {
  const url = `api/friends`;
  return await httpClient.get<FriendsResponseData>(url).then((response) => {
    if (response.status === 200 && response.data && response.data.items) {
      return response.data.items;
    }
    throw Error("[getFriend] Response has no data");
  });
};

export { getMelody, getFriends };
