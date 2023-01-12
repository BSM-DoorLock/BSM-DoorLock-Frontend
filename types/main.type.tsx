export interface UserType {
  isUser: boolean;
  name: string;
  studentId: string;
}

export interface RoomInfoType {
  id: number;
  isOpen: boolean;
  owners: UserType[];
  guests: UserType[];
}

export enum SocketResType {
  ROOM_ACCESS,
  RECEIVE_ROOM_SHARE,
}

export interface RoomAccessLogType {
  roomId: number;
  user: UserType;
  isOpen: boolean;
}

export interface ReceiveRoomShare {
  owner: UserType;
  guest: UserType;
  shareId: number;
}

export interface RoomRankingType{
  id: number;
  owners: UserType[];
  totalGuests: number;
}

export interface StudentRankingType{
  student: UserType;
  totalSharedRooms: number;
}