import axios from "axios"
import { useState } from "react"

export function CadastroCliente(){
    const url = "https://viacep.com.br/ws/74961070/json";
    // const url = "https://viacep.com.br/ws/74961070/json";
    // const url = "https://json-server-v.vercel.app/investidor";
    
    const [cep, setCep] = useState([]);
    const [inputCep, setInputCep] = useState("");

    const buscaCep = (e) => {
        e.preventDefault()
        console.log(inputCep)

        alert('Teste')
        /*** */
        axios.get(url)
            .then(response => {
                    setCep(response.data);
                    console.log(cep)
            })
            .catch(error => {
                    console.log(error);
            })
         
    }

    return(
        <div className="container">
            <h1 className="text-center">Consutar Cep</h1>
            <form className="text-center" onSubmit={buscaCep}>
                <div className="row">
                    <div className="col-11">
                        <input 
                            maxLength={8}
                            type="text"
                            className="form-control"
                            value={inputCep} 
                            placeholder="Digite seu cep"
                            onChange={ e => setInputCep(e.target.value) }
                        />
                    </div>

                    <div className="col">
                        <button
                            type="submit" 
                            className="btn btn-primary"
                        >Enviar</button>
                    </div>
                </div>
            </form>
            <div className="div">
            <p>CEP: {inputCep}</p>
                {/* { cep.map((item) => (
                    <ul key={item.cep}>
                        <li>{item.bairro}</li>
                    </ul>
                  ))
                } */}
            </div>
        </div>
    )
}