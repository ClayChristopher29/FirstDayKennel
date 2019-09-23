import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Location.png')} alt="Locations" />
          </picture>
          <h3>Name: <span className="card-locationname">{this.props.locationProp.name}</span></h3>
          <p>{this.props.locationProp.street}</p>
          <button onClick = {()=> this.props.deleteLocation(this.props.locationProp.id)}>Ya Fired</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;