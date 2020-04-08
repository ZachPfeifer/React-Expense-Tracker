import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import SearchBox from '../SearchHistory/SearchBox'


export default function TransactionsContainer() {
  const { transactions, handleInput, searchItems  } = useContext(GlobalContext)

 
  
  
  //SECTION Search transaction by Name(Text) and Amount.
  let filterItems = transactions.filter(transaction => {
    return transaction.text.includes(searchItems) 
    //|| transaction.amount.includes(searchItems)
  })
  
  
  // console.log(searchItems);
  console.log(`transactions ${transactions}`, `searchItems ${searchItems}`);
  
  return (
   <>
    <Balance />
    <IncomeExpenses />
    <SearchBox handleInput={handleInput} />
    {/*NOTE transactions show all transactions but NEED filterItems */}
    
    <TransactionList filterItems={filterItems}/>
    <AddTransaction />
   
   </>
  )
}
