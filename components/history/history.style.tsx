import styled from "styled-components";

export const HistoryContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 8px 10px lightgray;
  margin: 30px auto;
  display: flex;
  align-items: center;
  font-weight: normal;
  justify-content: center;
  border-radius: 20px;

  @media ${({ theme }) => theme.size.laptop} {
    height: 80px;
  }
`;

export const Name = styled.span`
  font-size: 13px;
  margin-right: 10px;
  @media ${({ theme }) => theme.size.tablet} {
    font-size: 1.5rem;
  }
`;

export const TypeAndDate = styled(Name)`
  color: gray;
  font-weight: normal;
`;
