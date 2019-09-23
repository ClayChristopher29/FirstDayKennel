import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./owner.jpg')} alt="owner" />
          </picture>
          <h3>Name: <span className="card-ownername">{this.props.ownerProp.name}</span></h3>
          <p>Pet Name:{this.props.ownerProp.pet}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;