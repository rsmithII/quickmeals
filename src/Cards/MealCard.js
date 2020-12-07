import React from 'react'

function MealCard({collection}) {
    const {imageURL, description, duration, groceries, videoURL} = collection

    return (
        <div className="card">
            <h2>{description}</h2>
            <img className="meal-image" src={imageURL} alt="logo"/>
            <label>Ingredients you will need:</label>
            <p>{groceries}</p>
            <label>Prep/Cooktime:</label>
            <p>{duration}!</p>
            <label>Watch the video!</label>
            <a href={videoURL}>Here</a>
            <button onClick={() => console.log("Ouch!")}>Add to List</button>
        </div>
    )
}
export default MealCard;