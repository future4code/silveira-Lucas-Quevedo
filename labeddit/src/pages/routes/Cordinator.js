export const irParaCadastro = (navigate) =>{
navigate("/")
}

export const irParaLogin = (navigate) =>{
    navigate("/login")
}

export const irParaFeed = (navigate) =>{
    navigate(`/feed`)
}

export const irParaPost = (navigate, id) =>{
    navigate(`/post/${id}`)
}