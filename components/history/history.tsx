import { HistoryPropsType } from "./type";
import * as S from './history.style'

export default function History({name, type, date}: HistoryPropsType){

    const localeDate = date.toLocaleString().split("T");
    const day = localeDate[0].split("-");
    const time = localeDate[1].split(":");

    const newDate = day[0] + "년 " + day[1] + "월 " + day[2] + "일 " + time[0] + "시 " + time[1] + "분 " + time[2] + "초";

    return(
        <S.HistoryContainer>
            <S.Name>{name} 출입</S.Name>
            <S.TypeAndDate>({type})</S.TypeAndDate>
            <S.TypeAndDate>{newDate}</S.TypeAndDate>
        </S.HistoryContainer>
    )
}