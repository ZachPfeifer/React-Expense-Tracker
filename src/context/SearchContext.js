import React, { Component, createContext } from 'react'
import Axios from 'axios'

// @ts-ignore
export const SearchContext = createContext()


class SearchContextProvider extends Component {

  state = {
    transactions: [],
    loading: true,
    searchItem: [],
  }


  getAllData = async () => {
    try {
      Axios.get('https://zachs-global-server.herokuapp.com/api/v1/transactions')
        .then(res => this.setState({
          transactions: res.data,
          loading: false
        }))
    } catch (error) {
      console.log(error);
    }
  }






  componentDidMount() {
    this.getAllData()
  }


  //SECTION Search Filter 



  //SECTION Handle for search Input
  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchItem: e.target.value })
  }

  render() {
    return (
      <SearchContext.Provider
        value={{
          ...this.state,
          handleInput: this.handleInput,
        }}>
        {this.props.children}
      </SearchContext.Provider>

    )
  }
}

export default SearchContextProvider