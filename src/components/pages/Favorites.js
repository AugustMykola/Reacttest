import React from 'react';
import Favorite from '../favoritescomponent/favoriteDish';
import './Favorites.scss'
import classes from "../Header.module.scss";
import { Link } from "react-router-dom";
import AddCustomDish from '../Modal/AddCustomDish';

class Favorites extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      error: false,
      isLoaded: false,
      items: {}
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  getDataFromLocalStorage(){
    if(localStorage.getItem('dish')!==null){
      
      const localStorageRef = JSON.parse(localStorage.getItem('dish'));
      console.log(localStorageRef);
          this.setState({
              isLoaded: true,
              items:localStorageRef
          })
    }else{
      this.setState({
          isLoaded: true,
          error: true,
      })
    }
  }

  componentDidMount() {
    this.getDataFromLocalStorage();
  }

  showModal = () => {
    this.setState({ show: true });
};

hideModal = () => {
    this.setState({ show: false });

};


  

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return(
      <>
      <AddCustomDish handleDish={this.props.addDish} show={this.state.show} handleClose={this.hideModal} />
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

          <div className={classes.header__button_ceaper}>
            <button className={classes.header__button} onClick={this.showModal}>Add custom dish</button>
          </div>
        </div>
      </header>
       <div className="error">Любимые рецепты отсувтвуют</div>
      </>
      );
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <>
                <AddCustomDish handleDish={this.props.addDish} show={this.state.show} handleClose={this.hideModal} />
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

              <div className={classes.header__button_ceaper}>
                <button className={classes.header__button} onClick={this.showModal}>Add custom dish</button>
              </div>
            </div>
          </header>
        <ul className ="favorites__wrapper">
          {Object.keys(items).map(item => {
              return <Favorite 
              key = {item}
              index = {item}
              details = {items[item]}
              />
          })}
        </ul>

        </>
      );
    }
  }

}

export default Favorites;

