import React, { Component } from 'react'
import MealCard from '../Cards/MealCard'

class Favorite extends Component {
    
    showCards = () => {
        return this.props.favorites.map(meal => {
            return <MealCard key={meal.id} favorites={this.props.favorites} />
        })
    }
    
    render() {
        return (
            <div>
                <h3>Add your recipes here: </h3>
                {this.showCards()}
            </div>
        )
    }
}
export default Favorite;