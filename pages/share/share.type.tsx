import { UserType } from "../type";

export interface RoomListType {
  id: number;
  isOpen: boolean;
  owners: UserType[];
  guests: UserType[];
}
