import { HistoryPropsType } from "./type";
import * as S from './history.style'

export default function History({name, type, date}: HistoryPropsType){
    return(
        <S.HistoryContainer>
            <S.Name>{name} 출입</S.Name>
            <S.TypeAndDate>({type})</S.TypeAndDate>
            <S.TypeAndDate>{date}</S.TypeAndDate>
        </S.HistoryContainer>
    )
}