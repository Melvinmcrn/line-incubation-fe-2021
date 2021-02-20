import httpClient from "./httpClient";
import { FriendData, MelodyData } from "utils/interface";

interface FriendsResponseData {
  items: FriendData[];
}

interface OwnershipResponseData {
  status: string;
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
  const url = "api/friends";
  return await httpClient.get<FriendsResponseData>(url).then((response) => {
    if (response.status === 200 && response.data && response.data.items) {
      return response.data.items;
    }
    throw Error("[getFriend] Response has no data");
  });
};

const getMelodyOwnership = async (userId: number, melodyId: number) => {
  const url = "api/ownership";
  const params = {
    userId,
    melodyId,
  };
  return await httpClient
    .get<OwnershipResponseData>(url, { params })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.status) {
        return response.data.status;
      }
      throw Error("[getMelodyOwnership] Response has no data");
    });
};

export { getMelody, getFriends, getMelodyOwnership };
