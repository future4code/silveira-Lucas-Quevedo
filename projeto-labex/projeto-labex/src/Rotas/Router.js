import { AdminHomePage } from "../Pages/AdminHomePage"
import { ApplicationFormPage } from "../Pages/ApplicationFormPage"
import { CreateTripPage } from "../Pages/CreateTripPage"
import { HomePage } from "../Pages/HomePage"
import { ListTripsPage } from "../Pages/ListTripsPage"
import { LoginPage } from "../Pages/LoginPage"
import { TripDetailsPage } from "../Pages/TripDetailsPage"
import {BrowserRouter, Routes, Route } from "react-router-dom"

import React from 'react'

export const Router = () => {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path='ListTrips' element={<ListTripsPage/>}></Route>
            <Route path="ApplicationForm" element={<ApplicationFormPage/>}></Route>
            <Route path= 'AdiminHome' element={<AdminHomePage/>}></Route>
            <Route path= 'LoginPage' element={<LoginPage/>}></Route>
            <Route path='CreateTrip' element={<CreateTripPage/>}></Route>
            <Route path='TripDetails/:id' element={<TripDetailsPage/>}></Route>
        </Routes>
        </BrowserRouter>
    
  )
}
