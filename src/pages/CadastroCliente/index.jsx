import axios from "axios"
import { useEffect, useState } from "react"

export function CadastroCliente(){
    const [inputCep, setInputCep] = useState("74961070");

    const url = `https://viacep.com.br/ws/${inputCep}/json`;
    
    const [cep, setCep] = useState([]);

    const [complemento, setComplemento]= useState('');

    useEffect( () => {
        axios.get(url)
        .then(response => setCep(response.data))
        .catch(error => { console.log(error) })
    }, [cep, setCep, url])


    const buscaCep = (e) => {
        e.preventDefault()

        console.log("Indice: " + cep.uf, complemento)

        axios.post("http://localhost:3000/endereco", {
            estado: cep.uf,
            cidade: cep.localidade,
            bairro: cep.bairro,
            logradouro: cep.logradouro,
            complemento,
        })
      .then(response => console.log(response))
      .catch(error => { console.log(error) })
    }

    return(
        <div className="container">
            <h1 className="text-center">Consutar Cep</h1>
            <form className="mt-3" onSubmit={buscaCep}>

                <div className="row">
                    <div className="col-3">
                        <input
                            name="cep"
                            type="text"
                            maxLength={8}
                            value={inputCep} 
                            className="form-control"
                            placeholder="Digite seu cep"
                            onChange={ e => setInputCep(e.target.value) }
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            value={ cep.uf ? cep.uf : "" }
                            onChange={ e => setCep.uf( e.target.value)}
                            disabled
                        />
                    </div>

                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            value={ cep.localidade ? cep.localidade : "" }
                            onChange={ e => setCep.localidade( e.target.value)}
                            disabled
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-3 col-sm-12">
                            <input 
                                type="text" 
                                className="form-control"
                                value={ cep.bairro ? cep.bairro : "" }
                                onChange={ e => setCep.bairro( e.target.value)}
                                disabled
                            />
                        </div>

                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control"
                                value={ cep.logradouro ? cep.logradouro : "" }
                                onChange={ e => setCep.logradouro( e.target.value)}
                                disabled
                            />
                        </div>

                        <div className="col">
                            <input 
                                type="text" 
                                placeholder="digite seu complemento casa, lote, apartamento etc..."
                                className="form-control"
                                value={ complemento }
                                onChange={ e => setComplemento(e.target.value) }
                            />
                        </div>
                </div>
                <div className="col mt-3">
                    <button type="submit"className="btn btn-primary">Enviar</button>
                </div>
            </form>

            <div className="div">

            </div>
        </div>
    )
}