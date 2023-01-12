import { UserType } from "../../pages/type";

export interface RoomPropsType {
    number: number;
    owners: UserType[];
    isShare?: true;
    ownerId?: string;
}