import { atom } from "recoil";

export const modalOpenState = atom<modalOpenStateType>({
  key: "modalOpenState",
  default: {
    isOpen: false,
    isEmpty: false,
    owner1: undefined,
    owner2: undefined,
    roomNo: 0,
  },
});

interface modalOpenStateType {
  isOpen: boolean;
  owner1: string | undefined;
  owner2: string | undefined;
  roomNo: number;
  isEmpty: boolean;
}
