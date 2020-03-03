import React from 'react';
import './App.css';
import Header from './components/Charts/Header';
import Balance from './components/Transactions/Balance';
import IncomeExpenses from './components/Transactions/IncomeExpenses';
import TransactionList from './components/Transactions/TransactionList';
import AddTransaction from './components/Transactions/AddTransaction';
import { GlobalProvider } from "./context/GlobalState";
import Chart from './components/Charts/Charts';



function App() {
  return (
    <GlobalProvider>
      {/* <div style={{ position: "relative", width: 800, height: 800 }}>
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div id="transactions" className="mx-auto">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
          <div id="charts" className="mx-auto "  >
            <Chart />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
