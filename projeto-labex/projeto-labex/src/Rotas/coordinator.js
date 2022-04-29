import { useNavigate } from "react-router-dom"

export const irParaListTrip = (navigate) =>{
    navigate("/ListTrips")
  } 

export const irParaAdminHome = (navigate) =>{

    navigate("/AdiminHome")
}
    //-----HomePage-------------------//

export const irParaCreateTrip = (navigate) =>{
        navigate("/CreateTrip")
      } 
export const irParaTripDetails = (navigate, id) =>{
        navigate(`/TripDetails/${id}`)
      }
      //-------AdminHomePage---------//

export const irParaHome = (navigate) =>{
        navigate("/")
      } 
      //-----ApplicationHomePage----------//

export const irParaApplicationForm = (navigate) =>{
        navigate("/ApplicationForm")
      }
      
    //-------ListTripPage---------//

    export const irParaLoginPage = (navigate) =>{
        navigate("/LoginPage")
      }