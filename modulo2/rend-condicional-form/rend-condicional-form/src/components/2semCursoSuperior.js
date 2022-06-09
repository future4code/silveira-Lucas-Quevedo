import React from "react";


class Etapa2 extends React.Component {
    render(){
        return (
            <div className={"etapa-2"}>
                <form>
                    <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <ol>
                        <li>
                            <label for="curso">5.Qual Curso?</label>
                        </li>
                        <input type={"text"} id="curso"></input>
                        <li>
                            <label for="unidade">6.Qual a unidade de ensino?</label>
                        </li>
                        <input type={"text"} id="unidade"></input>
                    </ol>
                </form>
            </div>
        )
    }
}

export default Etapa2;