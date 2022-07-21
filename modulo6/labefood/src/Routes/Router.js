import {BrowserRouter, Routes,Route} from "react-router-dom"
import Cart from "../Pages/cart/Cart"
import Feed from "../Pages/feed/Feed"
import Login from "../Pages/login/Login"
import Profile from "../Pages/profile/Profile"
import Restaurant from "../Pages/restaurant/Restaurant"
import Signup from "../Pages/signup/Signup"
import SignupAdress from "../Pages/signupAdress/SignupAdress"

export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signup/adress" element={<SignupAdress/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/feed/:restaurantId" element={<Restaurant/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/cart" element={<Cart></Cart>}/>
            
        </Routes>
        </BrowserRouter>

    )
}