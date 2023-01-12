import Image from "next/image";
import * as S from "./Room.style";
import { RoomPropsType } from "./type";
import { useRecoilState } from "recoil";
import { modalOpenState } from "../../store/ModalOpen";

export default function Room({
  number,
  owner1,
  owner2,
  isShare,
}: RoomPropsType) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  return (
    <>
      {!isShare ? (
        <S.RoomContainer>
          <S.RoomInfo>
            <Image
              src={"/image/door.svg"}
              alt="icon"
              width={130}
              height={130}
            />
            <span>{number}</span>
          </S.RoomInfo>
          <span className="owners">
            {owner1}, {owner2}
          </span>
        </S.RoomContainer>
      ) : (
        <S.ShareRoomContainer onClick={() => setIsModalOpen(true)}>
          <S.RoomInfo>
            <Image
              src={"/image/door.svg"}
              alt="icon"
              width={130}
              height={130}
            />
            <span>{number}</span>
          </S.RoomInfo>
          <span className="owners">
            {owner1}, {owner2}
          </span>
        </S.ShareRoomContainer>
      )}
    </>
  );
}
