import Image from "next/image"
import * as S from './Room.style'
import { RoomPropsType } from "./type"

export default function Room({ number, owner1, owner2 }: RoomPropsType){
    return(
        <S.RoomContainer>
            <S.RoomInfo>
                <Image src={"/image/door.svg"} alt="icon" width={130} height={130} />
                <span>{number}</span>
            </S.RoomInfo>
            <span className="owners">{owner1}, {owner2}</span>
        </S.RoomContainer>
    )
}