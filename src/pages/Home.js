import React from 'react'
import PropTypes from 'prop-types';
import Header from '../components/Charts/Header'
import Balance from '../components/Transactions/Balance'
import IncomeExpenses from '../components/Transactions/IncomeExpenses'
import TransactionList from '../components/Transactions/TransactionList'
import AddTransaction from '../components/Transactions/AddTransaction'
import Charts from '../components/Charts/Charts'

import withUser from "../components/Login/withUser";


const Home = (props) => {
  console.log('Hello from Home', props);
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="row">
          <div id="transactions" className="mx-auto">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
          <div id="charts" className="mx-auto "  >
            <Charts />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};
Home.propTypes = {
  action: PropTypes.shape({}).isRequired
}

export default withUser(Home)
