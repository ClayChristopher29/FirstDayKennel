// Create modules to query the database for employees, locations, and owners from your API.
// Create list components to handle calling the database modules.
// Display a static designed card for each section. We will get to displaying the correct data next.
// Pro tip: Remember to use your network tab in the Chrome Developer Tools to watch your network requests and preview the responses.

// Note

// Owners should have the id, phoneNumber, and name properties.
// Animals can have multiple owners.
import React, { Component } from 'react'
    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeeManager from '../../modules/EmployeeManager'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }
        deleteEmployee = id => {
            EmployeeManager.delete(id)
            .then(() => {
              EmployeeManager.getAll()
              .then((newEmployee) => {
                this.setState({
                    employees: newEmployee
                })
              })
            })
          }

    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        EmployeeManager.getAll()
        .then((employees) => {
            this.setState({
                employees: employees
            })
        })
    }

    render(){
        console.log("EMPLOYEE LIST: Render");

        return(
            <div className="container-cards">
                {this.state.employees.map(employee => <EmployeeCard deleteEmployee={this.deleteEmployee} key={employee.id} employeeProp ={employee}/>)}
            </div>
        )
    }
    }


export default EmployeeList