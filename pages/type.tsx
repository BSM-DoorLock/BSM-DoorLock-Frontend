export interface UserType{
    isUser: boolean;
    name: string;
    studentId: string;
}

export interface RoomInfoType{
    id: number;
    isOpen: boolean;
    owners: UserType[];
    guests: UserType[];
};