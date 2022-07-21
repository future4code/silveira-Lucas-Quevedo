import { ContainerCardHeader, Title} from "./Styled"
import { ArrowBackIosNew } from "@mui/icons-material"
import { goToBack } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"

export const Header = ({title, back}) =>{
    const naviagte = useNavigate()
    return <ContainerCardHeader>
           {back &&  <ArrowBackIosNew onClick={ () => goToBack(naviagte)}/>}
            <Title>{title}</Title>
        </ContainerCardHeader>
}

