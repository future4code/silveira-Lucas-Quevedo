export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}

export const validateCharacter = (input:Character): boolean =>{
  if(!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined){
    return false
  }
  if(input.life <= 0 || input.strength <= 0 || input.defense <= 0){
    return false
  }
  return true
}

export const atackerPerform = (atacker:Character, defender:Character, validator:(input:Character) => boolean) =>{
  if(!validator(atacker) || !validator(defender)){
    throw new Error("Personagem invalido!");
  }

  if(atacker.strength > defender.defense){
    defender.life -= atacker.strength - defender.defense
  }
}

