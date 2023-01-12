import Link from "next/link";
import styled from "styled-components";
import { Section } from "../all";

export const MainSection = styled(Section)`
  padding: 56px 11%;
  margin: 0 !important;
  width: 100%;
`;

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
  p {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const StyledLink = styled(Link)`
  &:link {
    color: white;
  }
`;

export const ShareRoom = styled(MyRoom)`
  /* p {
    position: fixed;
  } */
  min-width: 200px;
  .rooms {
    position: relative;
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

export const Empty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
  p {
    font-size: 20px;
  }
  svg {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  @media ${({ theme }) => theme.size.tablet} {
    p {
      font-size: 30px;
    }
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

export const GraphContainer = styled.div`
  margin-top: 30px;

  select{
    width: 70px;
  }

  div {
    max-width: 500px;
    margin: 0 auto;
  }
`

export const GraphText = styled.p`
  margin-top: 50px;
  margin-bottom: 40px;
`