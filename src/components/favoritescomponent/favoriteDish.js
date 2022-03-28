import React from 'react';
import './favoriteDish.scss'

class Favorite extends React.Component{
  render(){
  return(
    <li className ="favoritedish__wrapper">
            <div className = "favoritedish__body">
              <div className="favoritedish__body-image">
                <div>
                <img src= {this.props.details.strMealThumb} alt="placeholder"></img>
                </div>
              </div>
              <h2 className ="favoritedish__body-title"  >
                {this.props.details.strMeal}
                </h2>
               <p className ="favoritedish__body-description" >
               {this.props.details.strInstructions} 
               </p>
            </div>
    </li>
  );
  }
}

export default Favorite;