import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import {TransactionsContext} from "../../TransactionsContext"
import {useContext} from "react"

export function Summary(){
   const {transactions} = useContext(TransactionsContext);

   console.log(transactions);

   return (
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="IncomeImage" />
            </header>
            <strong>R$100.00</strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeImg} alt="IncomeImage" />
            </header>
            <strong>-R$100.00</strong>
        </div>
        <div className="highlightBackground">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="IncomeImage" />
            </header>
            <strong>0</strong>
        </div>
    </Container>
   )
}