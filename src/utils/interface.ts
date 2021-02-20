export interface MelodyData {
  id: number;
  artist: {
    name: string;
    nameEn: string;
    picture: string;
  };
  price: number;
  coin: number;
  coverPic: string;
  title: string;
  titleEn: string;
}

export interface FriendData {
  displayName: string;
  pictureUrl: string;
  userId: number;
}
