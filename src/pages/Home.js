import React from 'react'
import PropTypes from 'prop-types';
import Header from '../components/Charts/Header'

import Charts from '../components/Charts/Charts'

import withUser from "../components/Login/withUser";
import TransactionsContainer from '../components/Transactions/TransactionsContainer';


const Home = (props) => {
  // console.log('Hello from Home', props);
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="row">
          <div id="transactions" className="mx-auto">
          <Header />
          <TransactionsContainer/>
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
