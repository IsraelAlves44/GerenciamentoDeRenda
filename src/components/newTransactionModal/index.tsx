import Modal from "react-modal"
import { Container, TransactionTypeModal, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from "react";
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {    
    isOpen: boolean,
    onRequestClose: () => void;

}
export function NewTransactionModal({isOpen, onRequestClose }: NewTransactionModalProps){

    const {createTransactions} = useContext(TransactionsContext);

    const [type, setType] = useState("deposit")
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransactions({
            title,
            amount,
            category,
            type,
        })

       setTitle("");
       setAmount(0);
       setCategory("")
       setType("deposit")
       onRequestClose();
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

           <Container >
            <h2>Cadastrar transações</h2>

            <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>

            <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))}/>

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
           
            <button type="submit" onClick={handleCreateNewTransaction}>Cadastrar</button>
           </Container>
        </Modal>
    )
}