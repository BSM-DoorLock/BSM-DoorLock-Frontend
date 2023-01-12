import Image from "next/image";
import * as S from "./Room.style";
import { RoomPropsType } from "./type";
import { useRecoilState } from "recoil";
import { modalOpenState } from "../../store/ModalOpen";
import { isTemplateExpression } from "typescript";

export default function Room({
  number,
  owner1,
  owner2,
  isShare,
  ownerId,
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
            {owner1 ? `${owner1}${owner2 && ","} ${owner2}` : "빈 방입니다."}
          </span>
        </S.RoomContainer>
      ) : (
        <S.ShareRoomContainer
          onClick={() =>
            owner1
              ? setIsModalOpen({
                  ...isModalOpen,
                  isOpen: true,
                  owner1: owner1 && owner1,
                  owner2: owner2 && owner2,
                  roomNo: number,
                  ownerId: ownerId,
                })
              : setIsModalOpen({
                  ...isModalOpen,
                  ownerId: ownerId,
                  isOpen: true,
                  isEmpty: true,
                })
          }
        >
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
            {owner1
              ? `${owner1}${owner2 ? ", " + owner2 : ""}`
              : "빈 방입니다."}
          </span>
        </S.ShareRoomContainer>
      )}
    </>
  );
}
