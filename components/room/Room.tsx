import Image from "next/image"
import { useRouter } from "next/router"
import * as S from './Room.style'
import { RoomPropsType } from "./type"

export default function Room({ number, owner1, owner2 }: RoomPropsType){

    const router = useRouter();

    return (
      <S.RoomContainer
        onClick={() =>
          router.push(`/switch/${number}`)
        }
      >
        <S.RoomInfo>
          <Image src={"/image/door.svg"} alt="icon" width={130} height={130} />
          <span>{number}</span>
        </S.RoomInfo>
        <span className="owners">
          {owner1}, {owner2}
        </span>
      </S.RoomContainer>
    );
}