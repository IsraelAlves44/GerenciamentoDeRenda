import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header/header";
import { TransactionTable } from "./components/transactionTable";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal"
import { useState } from "react"
import { NewTransactionModal } from "./components/newTransactionModal"
import { TransactionProvider, TransactionsContext } from "./TransactionsContext";


Modal.setAppElement("#root");

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  
  function handOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal = {handOpenNewTransactionModal}/>
      <NewTransactionModal 
        isOpen = {isNewTransactionModalOpen}
        onRequestClose = {handCloseNewTransactionModal}
      />
      <Dashboard />
      <TransactionTable />
      <GlobalStyle />
    </TransactionProvider>
  );
}

