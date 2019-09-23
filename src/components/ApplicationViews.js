import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/home'
//only include these once they are built - previous practice exercise
import LocationList from './locations/LocationList'
import EmployeeList from './employees/EmployeeList'
import AnimalList from './animals/AnimalList'
import OwnerList from'./owners/OwnerList'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/home" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews