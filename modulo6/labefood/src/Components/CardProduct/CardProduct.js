import { useState } from "react"
import { useGlobal } from "../../Global/GlobalStateContext"
import { ModalSelectQuantity } from "../Modal/ModalSelectQuantity"
import { BoxInform, InformPrice, BoxInformePriceButton, BoxNameQuantity, ContainerCardProducts, ImageProduct, InformButton, InformDescrption, NameProduct } from "./Styled"

export const CardProduct = ({product}) =>{
    const [showModal, setShowModal] = useState(false)
    const requests = useGlobal()
    const addToCart = requests
    const choiceQuantity = (quantity) =>{
        addToCart(product, quantity)
    } 
    return <ContainerCardProducts>
        <ImageProduct src={product.photoUrl}/>
        <BoxInform>
            <BoxNameQuantity>
                <NameProduct>{product.name}</NameProduct>
            </BoxNameQuantity>
            <InformDescrption>{product.description}</InformDescrption>
            <BoxInformePriceButton>
                
                    <InformPrice>{product.price}</InformPrice>
                    <InformButton onClick={setShowModal}>
                        Adicionar
                </InformButton>
            </BoxInformePriceButton>
            <ModalSelectQuantity open={showModal} setOpen={setShowModal} choiceQuantity={choiceQuantity}/>
        </BoxInform>
    </ContainerCardProducts>
}