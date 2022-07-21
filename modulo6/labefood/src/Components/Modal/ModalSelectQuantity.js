import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { BoxModal, ButtonAddCard, SelectQuantity, Title } from './Styled';



export const ModalSelectQuantity = ({open, setOpen}) => {
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
        <SelectQuantity>
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
        <ButtonAddCard>
            Adicionar ao carrinho
        </ButtonAddCard>
       </BoxModal>
    
      </Modal>
    </div>
  );
}
