import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./satan.jpg')} alt="Locations" />
          </picture>
          <h3>Name: <span className="card-employeename">{this.props.employeeProp.name}</span></h3>
          <p>Department:{this.props.employeeProp.department}</p>
          <button onClick = {()=> this.props.deleteEmployee(this.props.employeeProp.id)}>Ya Fired</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard ;