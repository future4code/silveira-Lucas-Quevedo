import React from 'react'
import {Button} from '@material-ui/core'
import { LogoImage, ScreenContainer, InputsContainer } from './Styled'
import Logo from "../../assets/cookenu.png"
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/UseForm'

const Login = () => {
  const [form, onChange, clear] = useForm({email:"", password: ""})
  const onSubmitForm = () =>{

  }
  return (
    <div>
      <ScreenContainer>
        <LogoImage src={Logo}></LogoImage>
        <InputsContainer>
        <from onSubmit={onSubmitForm}>
          <TextField
          name={'email'}
          value={form.email}
          onChange={onChange}
          label={'E-mail'}
          ></TextField>
            <TextField
          name={'password'}
          value={form.password}
          onChange={onChange}
          label={'Senha'}
          ></TextField>


        </from>
        </InputsContainer>
      </ScreenContainer>
      <Button variant="contained" color="primary">
      login
      </Button>
      </div>
  )
}

export default Login