import React from 'react';
import MealCard from '../Cards/MealCard';

function Collection(props) {

    const showCards = () => {
        return props.collections.map(collection => {
            return <MealCard key={collection.id} collection={collection} addFavorite={props.addFavorite}/>
        })
    }

    return (
        <div className="collection-card">
            {showCards()}
        </div>
    )
}
export default Collection;