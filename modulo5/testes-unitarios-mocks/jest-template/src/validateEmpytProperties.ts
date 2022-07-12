export interface ValidateEmpytPropertiesOutput{
    isValid: boolean,
    errors:ValidateEmpytPropertiesErrors[]
}

export interface ValidateEmpytPropertiesErrors{
    key: string,
    values:string
}


export const validateEmpytProperties = (input:any):ValidateEmpytPropertiesOutput =>{

   {let errors: ValidateEmpytPropertiesErrors[] = []
   for(const key in input){
    if(input[key] !== false && !input[key]){
        errors.push({
            key,
            values:input[key]
        })
    }
   
   }
   return{
    isValid: errors.length === 0,
    errors
}
}
}