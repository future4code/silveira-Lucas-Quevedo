import styled from "styled-components";
import Fab from "@material-ui/core/Fab"

export const CardFeed = styled.div`
border: solid 1px grey;
display: flex;
align-items: center;
flex-direction: column;
width: 320px;
`
export const Placecard = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 30px;
justify-content: space-between;
`
export const Form = styled.form`
padding: 20px;
margin-bottom: 30px;
`
export const PlaceButton = styled.div`
display: flex;
flex-direction: row;

`

export const BotaoCriarPost = styled(Fab)`
/* position: fixed; */
right: 85px;
bottom: 10px;
z-index: 1;
`