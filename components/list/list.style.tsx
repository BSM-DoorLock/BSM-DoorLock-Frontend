import styled from "styled-components";

export const ListContainer = styled.div`
    width: 90%;
    height: 55px;
    border-radius: 20px;
    align-content: center;
    font-size: 18px;
    padding-left: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 0 auto;
    background-color: ${({ state }: { state: string }) => {
        if(state === "NO") return "#D9D9D9"
        else return "#F1F1F1"
    }};
    margin-top: 20px;
    box-shadow: 0 5px 5px lightgray;

    p{
        color: rgba(0, 0, 0, 0.6);
    }
    
`

export const Text = styled.div`
    display: flex;
`