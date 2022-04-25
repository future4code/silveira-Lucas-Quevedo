import React from 'react'

export const ApplicationFormPage = () => {
    const retornaPessoa = () =>{
        const pessoa = {
            nome: "lucas",
            idade: 28,
            profissao: "programador"
        }
        return pessoa
    }

    const {nome, idade,profissao} = retornaPessoa()
    console.log(nome)
  return (
  <div>
     
    <h1>ApplicationFormPage</h1>
    </div>
  )
}
