import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from "./context/GlobalState";
import Chart from './components/Charts/Charts';
import AllCharts from './components/Charts/AllCharts';



function App() {
  return (
    <GlobalProvider>
      <div style={{ position: "relative", width: 600, height: 550 }}>
        <h1>Sample Chart</h1>
        <AllCharts />
      </div>
      <Chart />
      <div className="container">
        <div className="row">
          <div id="transactions" className="float-left">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
          <div id="charts" className="float-right">

          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
