export type postUser ={
    name:string,
    email:string,
    password:string
}

export type userInsert = {
    id:string,
    name:string,
    email:string,
    password:string
}

export type getUser = {
    id:string,
    name:string,
    email:string,
    password:string
}

export type postProducts ={
    name:string,
    price:number,
    image_url:string

}

export type productsData ={
    id:string
    name:string,
    price:number,
    image_url:string

}

export type purchaseData ={
    id:string,
    user_Id:string,
    product_Id:string,
    quantity:number,
    total_Price:number
}