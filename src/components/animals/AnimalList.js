import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalsCard'
    import AnimalManager from '../../modules/AnimalManager'

    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }
        deleteAnimal = id => {
            AnimalManager.delete(id)
            .then(() => {
              AnimalManager.getAll()
              .then((newAnimals) => {
                this.setState({
                    animals: newAnimals
                })
              })
            })
          }

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animals) => {
            this.setState({
                animals: animals
            })
        })
    }

    render(){
        console.log("ANIMAL LIST: Render");

        return(
            <div className="container-cards">
                {this.state.animals.map(animal => <AnimalCard deleteAnimal={this.deleteAnimal} key={animal.id} animalProp ={animal}/>)}
            </div>
        )
    }
}

export default AnimalList