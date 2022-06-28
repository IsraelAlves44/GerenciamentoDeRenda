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

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransactions: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get("/transactions")
            .then(resp => setTransactions(resp.data.transactions))
    },[]);
    
    async function createTransactions(transactionInput: TransactionInput){
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),
      })
      const {transaction} = response.data;

      setTransactions([
        ...transactions,
        transaction,
      ]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}