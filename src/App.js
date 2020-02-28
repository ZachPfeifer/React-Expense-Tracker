import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from "./context/GlobalState";
import Chart from './components/Charts/Charts';



function App() {
  return (
    <GlobalProvider>
      {/* <div style={{ position: "relative", width: 800, height: 800 }}>
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div id="transactions">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
          <div id="charts" style={{ position: "relative", width: 800, height: 800 }}>
            <Chart />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
