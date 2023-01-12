import { atom } from "recoil";
import { UserType } from "../types/main.type";

export const modalOpenState = atom<modalOpenStateType>({
  key: "modalOpenState",
  default: {
    isOpen: false,
    isEmpty: false,
    owners: [],
    roomNo: 0,
    requestId: "",
  },
});

export const requestModalOpenState = atom({
  key: "requestModalOpenState",
  default: {
    isOpen: false,
    shareId: 0,
    guestName: "",
  },
});

interface modalOpenStateType {
  isOpen: boolean;
  owners: UserType[];
  roomNo: number;
  isEmpty: boolean;
  requestId?: string;
}
