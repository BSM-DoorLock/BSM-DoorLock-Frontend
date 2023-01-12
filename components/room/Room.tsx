import Image from "next/image";
import * as S from "./Room.style";
import { RoomPropsType } from "./type";
import { useRecoilState } from "recoil";
import { modalOpenState } from "../../store/ModalOpen";

export default function Room({
  number,
  owners,
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
            {/* {owner1 ? `${owner1}${owner2 && ","} ${owner2}` : "빈 방입니다."} */}
            {owners.map((value, index) => {
              if (index === 1) return `, ${value.name}`;
              else return value.name;
            })}
          </span>
        </S.RoomContainer>
      ) : (
        <S.RoomContainer
          onClick={() =>
            owners
              ? setIsModalOpen({
                  ...isModalOpen,
                  isOpen: true,
                  owners: owners,
                  roomNo: number,
                })
              : setIsModalOpen({
                  ...isModalOpen,
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
            {/* {owner1
              ? `${owner1}${owner2 ? ", " + owner2 : ""}`
              : "빈 방입니다."} */}
            {owners.length > 0
              ? owners.map((value, index) => {
                  if (index === 1) return `, ${value.name}`;
                  else return value.name;
                })
              : "빈 방입니다."}
          </span>
        </S.RoomContainer>
      )}
    </>
  );
}
