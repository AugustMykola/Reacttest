import React from 'react'

import {Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites'
import Dish from './components/Dish/Dish'




class App extends React.Component {
  state = {
    favoritesDishes:[]
  }

  componentDidMount() {
    if(localStorage.getItem('dish')!==null){
      const localStorageRef = JSON.parse(localStorage.getItem('dish'));
          this.setState({
              isLoaded: true,
              favoritesDishes:localStorageRef
          })
  }
}

  addDish = dish => {
    const favoritesDishes = {...this.state.favoritesDishes}
    favoritesDishes[`dish${Date.now()}`] = dish;
    this.setState({favoritesDishes});
    localStorage.setItem('dish', JSON.stringify(favoritesDishes));

    alert('Dish add to Favorites');
  }



  render(){
    return ( 
      <div>

      <Routes>
        <Route path="/" exact element ={<Home/>}></Route>
        <Route path="/randomDish" exact element ={<Dish handleChange = {this.addDish}/>}></Route>
        <Route path="/favorites"  element ={<Favorites addDish = {this.addDish}/>}></Route>
    </Routes> 
      </div>
  
    );
  }

}

export default App;
