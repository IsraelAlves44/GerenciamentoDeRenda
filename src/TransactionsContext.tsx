import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api"

interface Transaction {
    id: number;
    type: string;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | "createdAt">

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransactions: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>([]);

export function TransactionProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get("/transactions")
            .then(resp => setTransactions(resp.data.transactions))
    },[]);
    
    function createTransactions(transaction: TransactionInput){
        api.post('/transaction', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}