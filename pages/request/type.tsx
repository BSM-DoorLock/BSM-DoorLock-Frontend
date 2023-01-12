import { RoomInfoType, UserType } from "../type";

export interface ShareListType{
    id: number;
    room: RoomInfoType;
    owner: UserType;
    guest: UserType;
    stat: string;
}