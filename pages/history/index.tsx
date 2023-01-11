import History from "../../components/history/history";
import * as S from "./history.style";
import * as A from "../../styles/all";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function HistoryList() {
  return (
    <div>
      <Header />
      <A.Section>
        <S.HistoryContainer>
          <A.Title>내 방 기록</A.Title>
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
          <History
            name={"김영민"}
            type={"Guest"}
            date={"2023년 1월 10일 23시 44분 36초"}
          />
        </S.HistoryContainer>
      </A.Section>
      <Footer />
    </div>
  );
}
