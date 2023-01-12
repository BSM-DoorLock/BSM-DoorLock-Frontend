import { UserType } from "./main.type";

export interface MyRoomLogListType{
    id: number;
    roomId: number;
    user: UserType;
    accessedAt: Date;
    accessStat: string;
}