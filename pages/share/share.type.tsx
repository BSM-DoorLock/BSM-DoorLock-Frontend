export interface RoomListType {
  id: number;
  isOpen: boolean;
  owners: {
    name: string;
    studentId: string;
    isUser: boolean;
  }[];
  guests: {
    name: string;
    studentId: string;
    isUser: boolean;
  }[];
}
