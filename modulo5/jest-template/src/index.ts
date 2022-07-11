export interface User {
	name: string
	balance: number
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
 export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  export interface Users {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  export interface Casino {
    name: string;
    location: LOCATION;
  }

  export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  export interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }

  export const performPurchase = (user: User, value: number): User | undefined =>{
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}



  export const verifyAge = (casino: Casino, users: Users[]): Result =>{
    const allowed: Users [] = []
    const unallowed: Users[] = []

    for (const user of users){
        if(casino.location === LOCATION.EUA){
            if(user.age >= 21){
                allowed.push(user)
            }else{
                unallowed.push(user)
            }

        } else if(casino.location === LOCATION.BRAZIL){
            if(user.age >= 18){
            allowed.push(user)
            }else{
                unallowed.push(user)
            }
            break;
            }
        }
        return {
            brazilians:{
                allowed: allowed 
                .filter((user) => (user.nacionality === NACIONALITY.BRAZILIAN))
                .map((user) => user.name),
                unallowed: unallowed
                .filter((user) =>(user.nacionality) === NACIONALITY.BRAZILIAN)
                .map((user) => user.name),
            },
            americans:{
                allowed:allowed
                .filter((user) =>(user.nacionality === NACIONALITY.AMERICAN))
                .map((user) => user.name),
                unallowed:unallowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((user) => user.name)
            }
        }
    }

   
  


