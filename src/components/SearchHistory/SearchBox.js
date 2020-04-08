// import React, { useContext } from 'react'
// import { GlobalContext } from '../../context/GlobalState'
import React from 'react'

export default function SearchBox(props) {

  return (
    <form className="row ">
      <label htmlFor="search-input" className="col-10 mx-auto">
        <span className="mr-1">
          Search Bar:
          </span>
        <div className="input-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search Transactions"
            name="search-input"
            onChange={props.handleInput}
            />
          <div className="input-group-append">
            <button
            type="submit"
            className="btn btn-outline-dark"
            onClick={props.handleInput}
            disabled>Search</button>
          </div>
        </ div>
      </label>
    </form>
  )
}
