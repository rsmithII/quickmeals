import React, {Component} from 'react';
import MealPage from './Containers/MealPage'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <body>
          <header className="header">
            <h1>Quick Bites!</h1>
          </header>
          <main>
            <p className="opener">
              I made this app for those who may not have much time to make a meal.
              Here are a few recipes with the items needed, prep/cook time, and a
              video showing you how to make one of the following meals. If one of 
              these recipes catch your attention, go ahead and click the "Add to List"
              button to add to a section so you won't forget.
            </p>
          </main>
          <MealPage />
        </body>
      </div>
    );
  }
}

export default App;
