export const goToLogin = (navigate) =>{
    navigate("/")
}

export const goToFeed = (navigate) =>{
    navigate("/feed")
}

export const goToSignup = (navigate) =>{
    navigate("/signup")
}

export const goToSignupAdress = (navigate) =>{
    navigate("/signup/adress")
}

export const goToRestaurants = (navigate, id) =>{
    navigate(`/feed/${id}`)
}

