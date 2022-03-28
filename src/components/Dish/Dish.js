import React from 'react';
import './Dish.scss'
import classes from "../Header.module.scss";
import { Link } from "react-router-dom";




class Dish extends React.Component{
  constructor (props ){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

  }



  componentDidMount() {
    this.addDishToState();
  }

  addDishToState = () =>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.meals
        });
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  addLocalStorage = () => {
    
   
    this.props.handleChange(...this.state.items);

  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <>

<header className={classes.header}>
                <div className={classes.header__content}>
                    <Link to="/" className={classes.header__content__logo}>
                        Foodify Application
                </Link>

                    <nav className={classes.header__content__nav}>
                        <ul className={classes.header__content__list}>
                            <li>
                                <button >
                                    <Link to="/randomDish">
                                        Random dish
                            </Link>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <Link to="/favorites" >
                                        Favorite dish
                            </Link>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.header__space_ceaper}></div>
                </div>
            </header>
        
        <div className ="dish__wrapper">
          {items.map(item => (
            <div
            key={item} 
            className ="dish__container-mega">
            <div className = "dish__body">
              <div className="dish__body-image">
                <div>
                <img src= {item.strMealThumb} alt="placeholder"></img>
                </div>
              </div>
              <h2 className ="dish__body-title"  >
                {item.strMeal}
                </h2>
               <p className ="dish__body-description" >
               {item.strInstructions} 
               </p>
            </div>
            <div className ="dish__body-buttons">
          <button onClick ={this.addDishToState}> Skip </button>
          <button onClick = {this.addLocalStorage}> Like</button>
        </div>
            </div>
          ))}
        </div>
        </>

        
      );
    }
  }
}



export default Dish;
