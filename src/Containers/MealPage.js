import React, { Component } from 'react'
import Collection from './Collection'
import Favorite from './Favorite'

class MealPage extends Component {
    
    state = {
        collection: [],
        favorites: []
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/meals')
        .then(response => response.json())
        .then(results => this.setState({
            collection: results
        }))
    }
    
    addFavorite = (meal) => {
        if(!this.state.favorites.find(item => item === meal)){
            this.setState({favorites: [...this.state.favorites, meal]})
        }
    }
    
    render(){
        return (
            <div>
                <Favorite favorites={this.state.favorites}/>
                <Collection collections={this.state.collection} addFavorite={this.addFavorite}/>
            </div>
        );
    }
}
export default MealPage;