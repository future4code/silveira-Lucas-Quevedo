import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import  {AdminHomePage}  from './AdminHomePage/AdminHomePage';
import { ApplicationFormPage } from './ApplicationFormPage/ApplicationFormPage';
import { CreateTripPage } from './CreateTripPage/CreateTripPage';
import { HomePage } from './HomePage/HomePage';
import { ListTripsPage } from './ListTripsPage/ListTripsPage';
import { LoginPage } from './LoginPage/LoginPage';
import { TripDetailsPage } from './TripDetailsPage/TripDetailsPage';

function App() {
  const [telaAtual, setTelaAtual] = useState("ApplicationFormePage")

  const adminHomePage = () =>{
    setTelaAtual("AdminHomePage")

  }

  const applicationFormPage = () =>{
    setTelaAtual("ApplicationFormePage")
  }

  const createTripPage = () =>{
    setTelaAtual("CreateTripePage")
  }

  const homePage = () =>{
    setTelaAtual("HomePage")
  }

  const listTripsPage = () =>{
    setTelaAtual("ListTripsPage")
  }


  const loginPage = () =>{
    setTelaAtual("LoginPage")
  }

  const tripDetailsPage = () =>{
    setTelaAtual("tripDetailsPage")
  }
  const trocaTela = () =>{
    switch(telaAtual){
      case "AdminHomePage":
        return <AdminHomePage/>
        case "ApplicationFormePage":
          return <ApplicationFormPage/>
          case "CreateTripePage":
            <CreateTripPage/>
            case "HomePage":
              return <HomePage/>
              case "ListTripsPage":
                return <ListTripsPage/>
                case "LoginPage":
                return <LoginPage/>
                case "tripDetailPage":
                  return <TripDetailsPage/>
    }
    
  }
  return (
    <div className="App">
      {trocaTela()}
     
    </div>
  );
}

export default App;
