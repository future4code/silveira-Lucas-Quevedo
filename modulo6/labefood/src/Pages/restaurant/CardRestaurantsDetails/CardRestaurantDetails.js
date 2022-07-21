import { useNavigate } from "react-router-dom"
import { goToRestaurants } from "../../Routes/Coordinator"
import { BoxInformeTimePrice, ContainerCardRestaurant, ImageRestaurant, InformeTimePrice, NameRestaurant } from "./Styled"
export const CardRestaurantDetails = ({restaurant}) =>{
    const navigate = useNavigate()
    return <ContainerCardRestaurant onClick={() => goToRestaurants(navigate, restaurant.id)}>
       <ImageRestaurant src={restaurant.logoUrl}/>
       <NameRestaurant>{restaurant.name}</NameRestaurant>
       <BoxInformeTimePrice>
        <InformeTimePrice>{restaurant.deliveryTime}</InformeTimePrice>
        <InformeTimePrice>{restaurant.shipping}</InformeTimePrice>
       </BoxInformeTimePrice>
        </ContainerCardRestaurant>
}

