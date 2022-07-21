import * as React from 'react';
import Modal from '@mui/material/Modal';
import { BoxModal, ButtonAddCard, SelectQuantity, Title } from './Styled';

export const ModalSelectQuantity = ({open, setOpen}) => {
  const [quantity, setQuantity] = React.useState(1)

  const onChangeQuantity = (event) =>{
    setQuantity (event.target.value)
  }

  const onClickChoiceQuantity = () =>{
    return (Number(quantity))
  }
  console.log(onClickChoiceQuantity())
  return (
    <div>
        
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
       <BoxModal>
        <Title>Selecione a quantidade desejada</Title>
        <SelectQuantity onChange={onChangeQuantity}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        </SelectQuantity>
        <ButtonAddCard onClick={onClickChoiceQuantity}>
            Adicionar ao carrinho
        </ButtonAddCard>
       </BoxModal>
    
      </Modal>
    </div>
  );
}
