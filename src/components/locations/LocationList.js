import React, { Component } from 'react'
    //import the components we will need
    import LocationCard from './LocationCard'
    import LocationsManager from '../../modules/LocationsManager'

    class LocationList extends Component {
        //define what this component needs to render
        state = {
            locations: [],
        }
        deleteLocation = id => {
            LocationsManager.delete(id)
            .then(() => {
              LocationsManager.getAll()
              .then((newLocation) => {
                this.setState({
                    locations: newLocation
                })
              })
            })
          }

    componentDidMount(){
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        LocationsManager.getAll()
        .then((locations) => {
            this.setState({
                locations: locations
            })
        })
    }

    render(){
        console.log("LOCATION LIST: Render");

        return(
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard deleteLocation={this.deleteLocation} key={location.id} locationProp ={location}/>)}
            </div>
        )
    }
}

export default LocationList