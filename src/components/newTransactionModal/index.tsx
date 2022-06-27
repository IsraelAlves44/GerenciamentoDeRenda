import Modal from "react-modal"
import { Container, TransactionTypeModal, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;

}
export function NewTransactionModal({isOpen, onRequestClose }: NewTransactionModalProps){

    const transactions = useContext(TransactionsContext);

    const [type, setType] = useState("deposit")
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [value, setValue] = useState(0);

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = {
            type,
            title,
            category,
            value
        };
        
        api.post("/transactions", data);
        
        
    }

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="close" />
            </button>

           <Container onClick={handleCreateNewTransaction}>
            <h2>Cadastrar transações</h2>

            <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>

            <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>

            <TransactionTypeModal>
                <RadioBox 
                    onClick={()=> {setType("deposit")}}
                    isActive={type == "deposit"}
                    ActiveColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                    onClick={()=> {setType("withdraw")}}
                    isActive={type == "withdraw"}
                    ActiveColor="red"
                >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeModal>
           
            <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
           
            <button type="submit">Cadastrar</button>
           </Container>
        </Modal>
    )
}