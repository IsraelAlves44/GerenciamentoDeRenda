import { useEffect } from "react";
import {api} from "../../services/api"
import { Container } from "./styles";

export function TransactionTable () {

    useEffect(()=>{
        api.get("/transactions")
            .then(resp => resp.data)
    })
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$14.000</td>
                        <td>Vida</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td className="deposit">R$14.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td className="deposit">R$14.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td className="deposit">R$14.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}