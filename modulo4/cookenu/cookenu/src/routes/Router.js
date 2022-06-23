import React from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Header from "../components/Header";
import Login from "../pages/LoginPage/Login";
import ListaReceitas from "../pages/ListaReceitas/ListaReceitas";
import Cadastro from "../pages/CadastroPage/Cadastro";
import AdicionarReceita from "../pages/AdicionarReceita/AdicionarReceita";
import DetalheReceita from "../pages/DetalheReceita/DetalheReceita";

const Router = ()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<ListaReceitas/>}></Route>
            <Route path={"/cadastro"} element={<Cadastro/>}></Route>
            <Route path={"/login"} element={<Login/>}></Route>
            <Route path={"/adicionar"} element={<AdicionarReceita/>}></Route>
            <Route path={"/detalhes/:id"} element={<DetalheReceita/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router