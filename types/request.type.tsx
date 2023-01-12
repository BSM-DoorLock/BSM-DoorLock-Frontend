import { RoomInfoType, UserType } from "./main.type";

export interface ShareListType{
    id: number;
    room: RoomInfoType;
    owner: UserType;
    guest: UserType;
    stat: string;
}