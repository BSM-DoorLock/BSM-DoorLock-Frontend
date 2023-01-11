import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MyRoom = styled.div`
  padding-left: 5px;
  height: 40%;
  /* margin: 11% auto auto; */
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
`;

export const ShareRoom = styled(MyRoom)`
  /* p {
    position: fixed;
  } */

  .rooms {
    display: flex;
    gap: 30px;
    div {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  padding-bottom: 20px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 20px 20px 0 0;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px lightgray;
`;
