import { UserType } from "../../types/main.type";

export interface RoomPropsType {
    number: number;
    owners: UserType[];
    isShare?: true;
    ownerId?: string;
}