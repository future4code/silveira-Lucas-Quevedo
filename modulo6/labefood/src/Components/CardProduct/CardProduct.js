import { useState } from "react"
import { ModalSelectQuantity } from "../Modal/ModalSelectQuantity"
import { BoxInform, InformPrice, BoxInformePriceButton, BoxNameQuantity, ContainerCardProducts, ImageProduct, InformButton, InformDescrption, NameProduct } from "./Styled"

export const CardProduct = ({product}) =>{
    const [showModal, setShowModal] = useState(false)
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
            <ModalSelectQuantity open={showModal} setOpen={setShowModal}/>
        </BoxInform>
    </ContainerCardProducts>
}